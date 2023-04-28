class SessionsController < ApplicationController
    before_action :authorize_request, except: [:create]
    # POST /login
    def create
        sql = "username = :login_id OR email = :login_id"
        user = User.where(sql,{login_id: login_params[:login_id]}).first
        if user
            if user.authenticate(login_params[:password])
                session[:uid] = user.id
                session[:expiry] = 6.hours.from_now
                token = JsonWebToken.encode(user_id: user.id, email: user.email)
                time = Time.now + 6.hours.to_i
                app_response(data:{ user: user, token: token, exp: time.strftime("%m-%d-%Y %H:%M")})
            else
                app_response(message: "Something went wrong", data: { error: "Invalid password" }, status: :unauthorized)
            end
        else
            app_response(message: "Something went wrong", data: { error: "Username or email not found" }, status: :not_found)
        end
    end

    # GET /verify_token
    def verify
    end

    # DELETE /logout
    def destroy
        session.delete(:uid)
        session[:expiry] = Time.now
        app_response(message: 'Logout successful')
    end

    # GET /my-profile
    def my_profile 
        render json: current_user
    end

    private

    def login_params
        params.permit(:login_id, :password)
    end

end

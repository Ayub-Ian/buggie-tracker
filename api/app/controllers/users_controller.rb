class UsersController < ApplicationController
    # before_action :authorize_request, except: [:create]
    before_action :find_user, except: %i[create index]
    # POST /users
    def create
        user = User.create(users_params)
        if user.valid?
            app_response(data: user, status: :created)
            
        else
            app_response(message: "Something went wrong", data: user.errors.full_messages, status: :unprocessable_entity)
        end
    end

    # GET /users
    def index
        users = User.all
        app_response( data: users)
    end

    # GET /users/:id
    def show
        render json: @user, include: [:assigned_issues, :identified_issues]
    end

    # PUT /users/:id
    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages },
                    status: :unprocessable_entity
            end
    end

    # DELETE /users/:id
    def destroy
        @user.destroy!
        head :no_content
    end

    private
    def find_user
        @user = User.find(params[:id])
        rescue ActiveRecord::RecordNotFound
          render json: { errors: 'User not found' }, status: :not_found
      end
    def users_params
        params.permit(:name, :username, :email, :password, :password_confirmation)
    end
end

class UsersController < ApplicationController
    before_action :authorize_request, except: [:create]
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
    end

    # PUT /users/:id
    def update
    end

    # DELETE /users/:id
    def destroy
    end

    private
    def users_params
        params.permit(:name, :username, :email, :password, :password_confirmation)
    end
end

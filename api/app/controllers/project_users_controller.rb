class ProjectUsersController < ApplicationController
    
    before_action :authorize_request

    def create
        user = User.find_by(id: params[:user_id])
        if !user
            render json: { message: 'User not found' }, status: :not_found
            return
        end
        current_project = @current_user.projects.find_by(id: params[:id])
        member = current_project.project_users.find_by(user_id: user.id)

        if !member
            current_project.project_users.create(user: user)
            render json: {message: "Member created successfully"}, status: :ok
        else
            if member.project_id != current_project.id
                current_project.project_users.create(user: user)
                render json: {message: "Member added successfully"}, status: :ok
            else
                render json: {message: "User already exists", data: member}, status: :unprocessable_entity
            end
        end

    end


    # GET /project/:id/project_members
    def project_members
        current_project = @current_user.projects.find_by(id: params[:id])
        members = current_project.members
        render json: {members: members}
    end

    # GET /project/:id/not_members
    def not_members
        current_project = @current_user.projects.find_by(id: params[:id])
        members = current_project.members
        users = User.all
        non_members = users - members
        app_response(data: non_members)
    end

end

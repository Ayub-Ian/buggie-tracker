class ProjectsController < ApplicationController
    before_action :authorize_request
    before_action :find_project, except: [:index, :create]
 
    # GET /projects 
    def index
        projects = @current_user.projects
        app_response(data: projects)
    end

    # GET /projects/:id
    def show
        render json: @project, include: :issues
    end

    # POST /projects
    def create
        project = Project.new(project_params)
        project.project_users.build(user: @current_user)
        if project.save
            app_response(data: project)
        else
            app_response(message: "Something went wrong", data: project.errors.full_messages, status: :unprocessable_entity)
        end

    end

    # PUT /projects/:id
    def update
    end

    # DELETE /projects/:id
    def destroy
        @project.destroy!
        head :no_content
    end 

    private

    def find_project
        @project = Project.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e }, status: :not_found
    end

    def project_params
        params.permit(:name, :description, :start_date, :end_date)
    end
end

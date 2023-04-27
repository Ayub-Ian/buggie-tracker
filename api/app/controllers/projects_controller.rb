class ProjectsController < ApplicationController
    before_action :authorize_request
    before_action :find_project, only: [:show, :update, :destroy]

    # GET /projects 
    def index
        render json: Project.all, status: :ok
    end

    # POST /projects
    def create
        project = Project.create(project_params)
        if project.valid?
            app_response(data: project)
        else
            app_response(message: "Something went wrong", data: project.errors.full_messages, status: :unprocessable_entity)
        end
    end

    # GET /projects/:id
    def show
        render json: @project, status: :ok
    end

    # PUT /projects/:id
    def update
        render json: @project, status: :ok
    end

    # DELETE /projects/:id
    def destroy
    end

    private
    def find_project
        @project = Project.find params[:id]
        rescue ActiveRecord::RecordNotFound => e
            render json: { error: e }, status: :not_found
    end

    def project_params
        params.permit(:name, :description, :start_date, :end_date)
    end

end

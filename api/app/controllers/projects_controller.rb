class ProjectsController < ApplicationController
    before_action :authorize_request
    before_action :find_project, except: [:index, :create]
 
    # GET /projects 
    def index
        user_projects = @current_user.projects
        all_projects = user_projects.as_json(methods: :issue_count)
        render json: {data: all_projects}, status: :ok
    end

    # GET /projects/:id
    def show
        render json: @project.as_json(include: :issues)
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

class IssuesController < ApplicationController
    before_action :authorize_request
    before_action :find_issue, except: [:index, :create]

    # GET /issues 
    def index
        issues = Issue.all
        render json: issues, include: [:project]
    end

    # POST /issues
    def create
        issue = Issue.new(issue_params)
        if issue.save!
            render json: issue, status: :ok
        else
            render json: {error: issue.errors}, status: :unprocessable_entity
        end
        
        # issue = Issue.create(issue_params)
        # if issue.valid?
        #     app_response(data: issue)
        # else
        #     app_response(message: "Something went wrong", data: issue.errors.full_messages, status: :unprocessable_entity)
        # end
    end

    # GET /issues/:id
    def show
        render json: @issue, include: [:identified_by, :user_assigned, :project, :comments => { :include => :user}]  
    end

    # PUT  /issues/:id
    def update
        if @issue.update(issue_params)
            app_response(data: @issue)
        else
            app_response(message: "Something went wrong", data: @issue.errors.full_messages, status: :unprocessable_entity)
        end
    end

    # DELETE /issues/:id
    def destroy
        @issue.destroy!
        head :no_content  
    end

    private

    def find_issue
        @issue = Issue.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
        render json: 'not_found', status: :not_found
    end

    def issue_params
        params.permit(:title, :summary, :description, :issue_type, :priority, :assigned_to, :resolution_summary, :resolution_summary, :project_id, :user_identified, :issue_steps, :status)
    end
end

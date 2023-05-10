class CommentsController < ApplicationController
    def create
        issue = Comment.create(comment_params)
        if issue.valid?
            app_response(data: issue)
        else
            app_response(message: "Something went wrong", data: issue.errors.full_messages, status: :unprocessable_entity)
        end
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :issue_id)
    end
end

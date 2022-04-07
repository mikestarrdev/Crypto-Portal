class CommentsController < ApplicationController
    # before_action :authorized
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end

    def destroy
        comment.destroy
        render :no_head
    end

    private

    def comment
        comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:content, :user_id, :post_id)
    end

    def render_not_found
        render json: { error: "Comment not found" }, status: :not_found
    end

    def render_record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

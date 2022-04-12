class PostsController < ApplicationController
    before_action :authorized
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def index
        posts = Post.all
        render json: posts
    end

    def show
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def destroy
        post.destroy
        render :no_head
    end

    private

    def post
        post = Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :body, :user_id)
    end

    def render_not_found
        render json: { error: "Post not found" }, status: :not_found
    end

    def render_record_invalid(error)
        render json: { errors: error.record.errors.full_messages }, status: :unprocessable_entity
    end
end

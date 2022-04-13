class ForumsController < ApplicationController
    before_action :authorized

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def index
        forum = Forum.all
        render json: forum
    end

    def show
        forum = Forum.find(params[:id])
        render json: forum
    end

    def create
        forum = Forum.create!(forum_params)
        render json: forum, status: :created
    end

    private

    def forum_params
        params.require(:title)
    end

    def render_not_found
        render json: { error: "Forum not found" }, status: :not_found
    end

    def render_record_invalid(error)
        render json: { errors: error.record.errors.full_messages }, status: :unprocessable_entity
    end

end

class FavoritesController < ApplicationController
    # before_action :authorized
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid


    def show
        render json: favorite, status: :ok
    end

    def create
        favorite = Favorite.create!(user_params)
        render json: user, status: :created
    end

    def update
        favorite.update!(favorite_params)
        render json: favorite, status: :accepted
    end

    def destroy
        favorite.destroy
        render :no_head
    end

    private

    def favorite
        favorite = Favorite.find(params[:id])
    end

    def favorite_params
        params.permit(:token, :user_id)
    end

    def render_not_found
        render json: { error: "Favorite not found" }, status: :not_found
    end

    def render_record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

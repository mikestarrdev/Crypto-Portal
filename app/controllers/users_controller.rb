class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def index
        users = User.all
        render json: users
    end

    def show
        render json: user
    end


    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user.destroy
        render :no_head
    end

    def auth
        user = User.find(session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def user
        user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :avatar_url, :btc_address, :eth_address)
    end

    def render_not_found
        render json: { error: "User not found" }, status: :not_found
    end

    def render_record_invalid(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
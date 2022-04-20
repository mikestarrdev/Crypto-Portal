# class ReputationsController < ApplicationController
#     # before_action :authorized
    
#     rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
#     rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

#     def show
#         render json: reputation, status: :ok
#     end

#     def create
#         reputation = Reputation.create!(user_params)
#         render json: user, status: :created
#     end

#     def update
#         reputation.update!(reputation_params)
#         render json: reputation, status: :accepted
#     end

#     def destroy
#         reputation.destroy
#         render :no_head
#     end

#     private

#     def reputation
#         reputation = Reputation.find(params[:id])
#     end

#     def reputation_params
#         params.permit(:user_id)
#     end

#     def render_not_found
#         render json: { error: "Reputation not found" }, status: :not_found
#     end

#     def render_record_invalid(error)
#         render json: { errors: error.record.errors.full_messages }, status: :unprocessable_entity
#     end
# end

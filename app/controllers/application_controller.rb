class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authorized
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def authorized
        return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end

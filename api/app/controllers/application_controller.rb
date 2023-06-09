class ApplicationController < ActionController::API
    include ActionController::Cookies
    wrap_parameters format:[]
    
    # custom app response
    def app_response(message: 'Success', status: 200, data: nil)
        render json: {message: message, data: data}, status: status
    end

    # check and decode token
    def authorize_request
        header = request.headers['Authorization']
        token = header.split(' ').last if header
        begin
          @decoded = JsonWebToken.decode(token)
          @current_user = User.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound => e
          render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
          render json: { errors: e.message }, status: :unauthorized
        end
    end

end

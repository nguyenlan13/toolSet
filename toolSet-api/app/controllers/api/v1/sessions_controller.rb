class Api::V1::SessionsController < ApplicationController

    def new

    end

    def auth
        render json: {csrf_auth_token: form_authenticity_token}
    end

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            log_in(user)
            render json: user, status: 200
        else
            render json: { message: "Login credentials were incorrect, please try again.", error: true }
        end
    end

    def destroy
        session.delete(:user_id)
        render json: {status: 200}
    end
end

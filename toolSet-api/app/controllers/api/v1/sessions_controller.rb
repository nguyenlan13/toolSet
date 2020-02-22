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

    def googleAuth
        # Get access tokens from the google server
        access_token = request.env["omniauth.auth"]
        user = User.from_omniauth(access_token)
        # log_in(@user)
        # Access_token is used to authenticate request made from the rails application to the google server
        user.google_token = access_token.credentials.token
        # Refresh_token to request new access_token
        # Note: Refresh_token is only sent once during the first request
        refresh_token = access_token.credentials.refresh_token
        user.google_refresh_token = refresh_token if refresh_token.present?
       
        if user.save
            log_in(user)
            redirect_to 'http://localhost:3000/api/v1'
            # render json: user, status: 200
        else
            render json: { message: "Login credentials were incorrect, please try again.", error: true }
        end
    end
end

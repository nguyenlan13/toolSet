class Api::V1::SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    def new

    end

    def debug
        render json: session
    end

    def auth
        # byebug
        cookies["logged_in"] = logged_in?
        render json: {csrf_auth_token: form_authenticity_token}
    end

    def create
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            log_in(@user)
            cookies["logged_in"] = true
            # byebug
            # render json: { user: user, message: "sucess!" }, status: 200
            render json: { message: "success!", user: @user }
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
            redirect_to 'http://localhost:3000/'
            # render json: user, status: 200
        else
            render json: { message: "Login credentials were incorrect, please try again.", error: true }
        end
    end
end

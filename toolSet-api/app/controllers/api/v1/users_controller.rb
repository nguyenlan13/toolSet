class Api::V1::UsersController < ApplicationController
    
    def new
        @user = User.new
        render json: @user, status: 200
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            log_in(@user)
            render json: @user, status: 200
        else
            render json: { message: "Sorry, User could not be created, please try again.", error: true}, status: 400 
        end
    end
    
    def show
        @user = User.find(params[:id])
        render json: @user, status: 200
    end
    
    private
    
    def user_params
        params.require(:user).permit(:email, :name, :username, :password)
    end
    
    
end

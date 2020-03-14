class Api::V1::CommentsController < ApplicationController

    # before_action :authenticate
    before_action :get_comment, only: [:edit, :update, :destroy]
     # before_action :authorize[]

    def index
        current_user
        if params[:comment_id]
            comment = Comment.find(params[:comment_id]).comments
        elsif params[:user_id]
            comment = User.find(params[:user_id]).comments
        elsif params[:attempt_id]
            comment = Attempt.find(params[:attempt_id]).comments
        else
            comments = Comment.all
        end
        render json: comments, status: 200
    end 

    def new
        # @user = current_user
        # comment = Comment.new
    end

    def create
        if params[:comment_id]
            commentable = Comment.find(params[:comment_id])
        else params[:attempt_id]
            commentable = Attempt.find(params[:attempt_id])
        end
        comment = commentable.comments.new(comment_params)
        comment.user = current_user
        if comment.save 
            render json: { message: "Feedback successfully saved!", error: false}
        else
            render json: { message: "Sorry, feedback could was not saved. Please try again.", error: true }
        end
    end

    # def edit
    #     user = current_user
    #     authorize(comment)
    # end

    def update
        authorize(comment)
        if comment.update(comment_params)
            render json: { message: "Feedback successfully updated!", error: false}
        else
            render json: { message: "Sorry, feedback could was not updated. Please try again.", error: true }
        end
    end

    def destroy
        authorize(comment)
        if comment.delete
            render json: { message: "Feedback successfully deleted!", error: false}
        else
            render json: { message: "Sorry, feedback could was not deleted. Please try again.", error: true }
        end
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, status: 200
    end

    private

    def get_comment
        comment = Comment.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:user_id, :content, :commentable_id, :commentable_type)
    end


end

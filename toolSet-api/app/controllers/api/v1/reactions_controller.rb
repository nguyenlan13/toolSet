class Api::V1::ReactionsController < ApplicationController

    def create
        if params[:comment_id]
            reactable = Comment.find(params[:comment_id])
        else params[:attempt_id]
            reactable = Attempt.find(params[:attempt_id])
        end
        reaction = reactable.reactions.new(reaction_params)
        reaction.user = current_user
        if reaction.save 
            render json: reaction, include: [:user], status: 200
            # { message: "Reaction successfully saved!", comment: comment, error: false}
        else
            render json: { message: "Sorry, reaction could was not saved. Please try again.", error: true }
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
        # comment = Comment.find(params[:id])
        render json: comment, status: 200
    end
end

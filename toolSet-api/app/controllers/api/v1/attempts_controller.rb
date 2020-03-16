class Api::V1::AttemptsController < ApplicationController

    def index
        #authorize
        if params[:lesson_id]
            attempts = Lesson.find(params[:lesson_id]).attempts
        else
            attempts = Attempt.all
        end
        render json: attempts, status: 200
    end

    def create
        lesson = Lesson.find(params[:lesson_id])
        lesson.user = current_user
        attempt = lesson.attempts.build(attempt_params)
        #authorize(attempt)
        if attempt.save
            render json: { message: "Attempt successfully saved!", error: false}
        else
            render json: { message: "Sorry, attempt could was not saved. Please try again.", error: true }
        end
    end

    def show
        attempt = Attempt.find(params[:id])
        render json: attempt, include: [:comments], status: 200
    end

    private

    def attempt_params
        params.require(:attempt).permit(:lesson_id, :attempt_number, :content, :diagram)
    end
end

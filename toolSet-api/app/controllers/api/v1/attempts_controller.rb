class Api::V1::AttemptsController < ApplicationController

    def index
        #authorize
        attempts = Lesson.find(params[:lesson_id]).attempts
        render json: attempts
    end

    def create
        lesson = Lesson.find(params[:lesson_id])
        lesson.user = current_user
        attempt = lesson.attempt.build(attempt_params)
        #authorize(attempt)
        if attempt.save
            render json: { message: "Attempt successfully saved!", error: false}
        else
            render json: { message: "Sorry, attempt could was not saved. Please try again.", error: true }
        end
    end

    private

    def attempt_params
        params.require(:attempt).permit(:lesson_id, :attempt_number, :content, :diagram)
    end
end

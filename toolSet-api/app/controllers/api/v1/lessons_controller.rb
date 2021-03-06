class Api::V1::LessonsController < ApplicationController

    def index
        if params[:user_id]
            lessons = User.find(params[:user_id]).lessons
        elsif params[:topic_id]
            lessons = Topic.find(params[:topic_id]).lessons
        else
            lessons = Lesson.all
        end
        render json: lessons, include: [:user, :topic], status: 200
    end

    def new
        # lesson = Lesson.new
    end

    def create
        topic = Topic.find(params[:topic_id])
        lesson = topic.lessons.build(lesson_params)
        lesson.user = current_user
            # authorize(lesson)
        if lesson.save
            render json: lesson, include: [:user], status: 200
        else
            render json: { message: "Sorry, lesson could not be created, please try again.", error: true}, status: 400
        end
    end

    def edit
        # user = current_user
        # lesson = Lesson.find(params[:lesson_id])
    end

    def show
        lesson = Lesson.find(params[:id])
        render json: lesson, include: [:attempts, :user], status: 200
    end

    def update

    end

    def destroy

    end

    private

    def lesson_params
        params.require(:lesson).permit(:user_id, :topic_id, :description)
    end
end

class Api::V1::TopicsController < ApplicationController

    def index
        if params[:user_id]
            topics = User.find(params[:user_id]).topics
        elsif params[:category_id]
            topics = Category.find(params[:category_id]).topics
        else
            topics = Topic.all
        end
        render json: topics, status: 200
       
    end

    def new
        # topic = Topic.new
    end

    def create
        topic = Topic.new(topic_params)
        if topic.save
            render json: topic
        else
            render json: { message: "Sorry, topic could not be created, please try again.", error: true}, status: 400
        end
    end

    def show

    end

    def topic_params
        params.require(:topic).permit(:name)
    end
end

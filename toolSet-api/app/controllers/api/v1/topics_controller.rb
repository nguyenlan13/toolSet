class Api::V1::TopicsController < ApplicationController

    def index
        if params[:user_id]
            topics = User.find(params[:user_id]).topics
        elsif params[:category_id]
            topics = Category.find(params[:category_id]).topics
        else
            topics = Topic.all
        end
        render json: topics, include: [:category_topics, :categories], status: 200
       
    end

    def new
        # topic = Topic.new
    end

    def create
        if params[:category_id]
            category = Category.find(params[:category_id])
            # topic = category.topics.build(topic_params)
            topic = Topic.new(topic_params)
            category_topic = CategoryTopic.new(category: category, topic: topic)
            if category_topic.save
                render json: topic, status: 200
            else
                render json: { message: "Sorry, topic could not be created, please try again.", error: true}, status: 400
            end
        else
        topic = Topic.new(topic_params)
            if topic.save
                render json: topic, status: 200
            else
                render json: { message: "Sorry, topic could not be created, please try again.", error: true}, status: 400
            end
        end
    end

    def show
        topic = Topic.find(params[:id])
        render json: topic, include: [:lessons], status: 200
    end

    def topic_params
        params.require(:topic).permit(:name)
    end
end

class Api::V1::CategoryTopicsController < ApplicationController

    def index
        category_topics = CategoryTopic.all

        render json: category_topics
    end

    def create
        if params[:category_id]
            category = Category.find(params[:category_id])
            topic = Topic.create(name: params[:name])
        else
            category = Category.create(name: params[:name])
            topic = Topic.find(params[:topic_id])
        end

        category_topic = CategoryTopic.new(category: category, topic: topic)

        if category_topic.save
            render json: category_topic, status: 200
            # { message: "saved!", error: false, category_topic: category_topic}
        else
            render json: { message: "Sorry, was not saved. Please try again.", error: true }
        end



        # if params[:category_id]
        #     category = Category.find(params[:category_id])
        #     topic = Topic.create(name: params[:name])
        #     category_topic = CategoryTopic.new(category: category, topic: topic)
        #     if category_topic.save
        #         render json: { message: "saved!", error: false, category_topic: category_topic}
        #     else
        #         render json: { message: "Sorry, was not saved. Please try again.", error: true }
        #     end
        # else 
        #     category = Category.create(name: params[:name])
        #     topic = Topic.find(params[:topic_id])
        #     category_topic = CategoryTopic.new(category: category, topic: topic)
        #     if category_topic.save
        #         render json: { message: "saved!", error: false, category_topic: category_topic}
        #     else
        #         render json: { message: "Sorry, was not saved. Please try again.", error: true }
        #     end
        # end
    end
end

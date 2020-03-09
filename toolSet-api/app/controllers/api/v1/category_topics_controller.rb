class Api::V1::CategoryTopicsController < ApplicationController

    def create
        if params[:category_id]
            category =  Category.find(params[:category_id])
            topic = Topic.create(name: params[:name])
            category_topic = CategoryTopic.new(category: Category.find(params[:category_id]), topic: topic)
        else 
            category = Category.create(name: params[:name])
            category_topic = CategoryTopic.new(category: category, topic: Topic.find(params[:topic_id]))
            if category_topic.save
                render json: { message: "saved!", error: false, category_topic: category_topic}
            else
                render json: { message: "Sorry, was not saved. Please try again.", error: true }
            end
        end
    end

    
end

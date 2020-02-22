class Api::V1::CategoriesController < ApplicationController

    def index
        if params[:topic_id]
            @categories = Topic.find(params[:topic_id]).categories
        else
            @categories = Category.all
        end
        render json: @categories, status: 200
    end

    def create
        category = Category.create(category_params)

        render json: category, status: 200
    end

    def show
        category = Category.find(params[:id])
        # render json: @category.to_json(include: {:items})
        render json: category, status: 200
    end

    # def edit

    # end

    # def update
    #     @category = Category.find(params[:id])
    #     @category.update(category_params)
    #     render json: @category, status: 200
    # end

    # def destroy
    #     @category = Category.find(params[:id])
    #     @category.delete
    
    #     render json: {categoryId: @category.id}
    # end

    private
    def category_params
        params.require(:item).permit(:name)
    end
end

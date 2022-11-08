class Api::V1::ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end


    def create
        review = Review.create(review_params)
        reviews = Review.all
        render json: reviews
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        reviews = Review.all
        render json: reviews
    end

    private
    def review_params
        params.require(:review).permit(:description, :score , :book_id, :user_id)
    end
end

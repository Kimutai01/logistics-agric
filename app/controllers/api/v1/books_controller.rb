class Api::V1::BooksController < ApplicationController
    def index
        books = Book.all
        render json: books , include: [:reviews]
        
    end


    def create 
        book = Book.create(book_params)
        books = Book.all
        render json: books , include: [:reviews]
       
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        books = Book.all
        render json: books , include: [:reviews]
    end





    private

    def book_params
        params.require(:book).permit(:name)
    end


end

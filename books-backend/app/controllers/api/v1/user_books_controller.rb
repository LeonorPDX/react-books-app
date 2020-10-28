class Api::V1::UserBooksController < ApplicationController

    def create
        ub = UserBook.new(user_id: params[:user_id], book_id: params[:book_id])
        if ub.save
            book = Book.find(params[:book_id])
            render json: book  # Return a book JSON obj so the fetch can pass it into dispatch to be concat onto userBooks array in Redux store
        else
            reder json: {error: "Error adding book to user's collection."}
        end
    end

    def destroy
        ub = UserBook.find_by(user_id: params[:user_id], book_id: params[:book_id])
        if ub.destroy
            book = Book.find(params[:book_id])
            render json: book # Return a book JSON obj so the fetch can pass it into dispatch to be filtered from userBooks array in Redux store
        else
            reder json: {error: "Error removing book from user's collection."}
        end
    end

end

class Api::V1::UsersController < ApplicationController
    
    def create
        user = User.find_or_create_by(username: params[:username])
        render json: user, only: [:id, :username], include: [:notes, :books]
    end

    def show
        user = User.find(params[:id])
        render json: user, only: [:id, :username], include: [:notes, :books]
    end

    def update # Fetch sends patch request to ../api/v1/users/:id when removing book from 
        ub = UserBook.find_by(user_id: params[:id], book_id: params[:book_id])  # Could refactor into instance method in the User class, def remove_book(book_id)
        if ub.destroy
            book = Book.find(params[:book_id])
            render json: book # Return a book JSON obj so the fetch can pass it into dispatch to be filtered from userBooks array in Redux store
        else
            reder json: {error: "Error removing book from user's collection."}
        end
    end

end

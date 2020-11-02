class Api::V1::UsersController < ApplicationController
    
    def create
        user = User.find_or_create_by(username: params[:username])
        User.set_current_user(user.id)   # New code to set the class variable when a user signs in on the front end

        render json: user, only: [:id, :username], include: [:notes, :books]
    end

    def show
        user = User.current_user
        if user != "Error"
            render json: user, only: [:id, :username], include: [:notes, :books]
        else 
            render json: {user: {id: "", username: '', notes: [], books: []}}    # Return the user or return an empty user object to initialize state when App mounts before a user has signed in
        end
    end

    def update # Fetch sends patch request to ../api/v1/users/:id when removing book from user's book collection
        ub = UserBook.find_by(user_id: params[:id], book_id: params[:book_id])  # Could refactor into instance method in the User class, def remove_book(book_id)
        if ub.destroy
            book = Book.find(params[:book_id])
            render json: book # Return a book JSON obj so the fetch can pass it into dispatch to be filtered from userBooks array in Redux store
        else
            render json: {error: "Error removing book from user's collection."}
        end
    end

end

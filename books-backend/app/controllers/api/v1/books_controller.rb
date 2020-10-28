class Api::V1::BooksController < ApplicationController

    def index
        books = Book.all.sort_by{ |b| b.title }
        render json: books
    end
    
end

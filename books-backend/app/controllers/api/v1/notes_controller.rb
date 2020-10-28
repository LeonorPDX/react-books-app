class Api::V1::NotesController < ApplicationController
    
    def create
        note = Note.create(content: params[:content], user_id: params[:user_id], book_id: params[:book_id])
        if note.save
            render json: note
        else
            reder json: {error: "Error creating note."}
        end
    end
    
end

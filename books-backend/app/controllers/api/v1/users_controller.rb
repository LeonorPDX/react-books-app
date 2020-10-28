class Api::V1::UsersController < ApplicationController
    
    def create
    end
    
    def show
        user = User.find(params[:id])
        render json: user, only: [:id, :name], include: [:notes, :books]
    end
end

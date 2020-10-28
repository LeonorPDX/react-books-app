class Api::V1::UsersController < ApplicationController
    
    def create
        user = User.find_or_create_by(username: params[:username])
        render json: user, only: [:id, :username], include: [:notes, :books]
    end

    def show
        user = User.find(params[:id])
        render json: user, only: [:id, :username], include: [:notes, :books]
    end
end

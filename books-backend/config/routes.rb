Rails.application.routes.draw do
  resources :books
  resources :user_books
  resources :notes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

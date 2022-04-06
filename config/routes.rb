Rails.application.routes.draw do
  resources :reputations, only: []
  resources :favorites, only: []
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: []
  resources :users, only: []
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

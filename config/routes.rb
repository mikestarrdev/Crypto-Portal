Rails.application.routes.draw do
  resources :reputations, only: [:show, :create, :update, :destroy]
  resources :favorites, only: [:show, :create, :update, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

Rails.application.routes.draw do
  resources :forums
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :reputations, only: [:show, :create, :update, :destroy]
  resources :favorites, only: [:show, :create, :update, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  
  post "/login", to: "sessions#create"
  get "/auth", to: "users#auth" 
  delete "/logout", to: "sessions#destroy"
end
 
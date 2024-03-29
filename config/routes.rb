Rails.application.routes.draw do
  resources :forums, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :reputations, only: []
  resources :favorites, only: [:create, :update, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  
  post "/login", to: "sessions#create"
  get "/auth", to: "users#auth" 
  delete "/logout", to: "sessions#destroy"
  get "/forum/:title", to: "forums#forum_title"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
 
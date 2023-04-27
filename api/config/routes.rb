Rails.application.routes.draw do
  resources :projects, only: [:create, :show, :index, :update, :destroy]
  resources :issues, only: [:create, :show, :index, :update, :destroy]
  resources :users, only: [:create, :show, :index, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # sessions
  post '/register', to: "users#create"
  post '/login', to: "sessions#create"
  get '/verify_token', to: "sessions#verify"
  delete '/logout', to: "sessions#destroy"
end

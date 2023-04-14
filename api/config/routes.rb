Rails.application.routes.draw do
  resources :projects
  resources :issues
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

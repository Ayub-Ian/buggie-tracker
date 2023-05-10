Rails.application.routes.draw do
  resources :projects, only: [:create, :show, :index, :update, :destroy]
  resources :issues, only: [:create, :show, :index, :update, :destroy]
  resources :users, only: [:create, :show, :index, :update, :destroy]
  resources :comments, only: [:create, :show, :index, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # GET /projects/:id/project_members
  get "/projects/:id/project_members", controller: :project_users, action: :project_members
  post "/projects/:id/add_member", controller: :project_users, action: :create
  get "/project/:id/not_members", controller: :project_users, action: :not_members

  # sessions
  post '/register', to: "users#create"
  post '/login', to: "sessions#create"
  get '/verify_token', to: "sessions#verify"
  delete '/logout', to: "sessions#destroy"
  get "/my-profile", controller: :sessions, action: :my_profile
end

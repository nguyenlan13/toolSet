Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    namespace :api do
        namespace :v1 do
        
            # resources :users
            resources :categories
            resources :topics
            resources :lessons
            resources :attempts
            resources :reactions
            resources :comments
            resources :category_topics
          
        
            get "/auth" => 'sessions#auth'
            get "/signup" => "users#new", as: "signup"
            post "/signup" => "users#create"
            get "/login" => "sessions#new", as: "login"
            post "/login" => "sessions#create"
            delete "/logout" => "sessions#destroy"

        end
    end
end

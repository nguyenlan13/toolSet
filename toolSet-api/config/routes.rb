Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    namespace :api do
        namespace :v1 do
        
            resources :users do
                resources :lessons
                resources :topics
                resources :comments
            end

            resources :categories do
                resources :topics
            end

            resources :topics do
                resources :lessons
                resources :users
                resources :categories
            end

            resources :lessons do
                resources :attempts
            end

            resources :attempts do
                resources :comments
                resources :reactions
            end

            resources :comments do
                resources :reactions
            end
            resources :category_topics
          
            get '/debug' => 'sessions#debug'
        
            get "/auth" => 'sessions#auth'
            # get "/signup" => "users#new", as: "signup"
            post "/signup" => "users#create"
            # get "/login" => "sessions#new", as: "login"
            post "/login" => "sessions#create"
            delete "/logout" => "sessions#destroy", as: "logout"
            
            # Routes for Google authentication
            get 'auth/:provider/callback', to: 'sessions#googleAuth'
            get 'auth/failure', to: redirect('/')
        end
    end
end

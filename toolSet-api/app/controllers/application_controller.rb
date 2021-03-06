class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    
    protect_from_forgery with: :exception
    before_action :set_csrf_cookie
    
    
    def log_in(user)
        session[:user_id] = user.id
    end
    
    def current_user
        User.find_by(id: session[:user_id])
    end
    
    def logged_in?
        !!current_user
    end
    
    def owner?(resource)
        resource.user == current_user
    end
    
    private

    def set_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end

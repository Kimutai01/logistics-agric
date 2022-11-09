Rails.application.routes.draw do
  devise_for :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "root#index"
  devise_scope :user do
     get '/users/sign_out' => 'devise/sessions#destroy' 
  end

  namespace :api do
    namespace :v1 do
      resources :books
      resources :reviews
      resources :users

    end
  end
end

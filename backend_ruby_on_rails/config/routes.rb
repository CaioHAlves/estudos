Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :transactions, only: %i[index] 

      post 'session', to: 'session#authenticate'
      resources :todo, only: %i[index create update destroy] do 
        post :destroy_all_selected, on: :collection
      end

      resources :user, only: %i[index create destroy update] do 

      end

      resources :finance, only: %i[index create destroy update] do
        
      end
    end
  end
end
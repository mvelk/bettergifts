Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :products
    resources :wishlist_items
    resources :wishlists, only: [:index, :show, :delete, :create]
    get '/friends-wishlists' => 'wishlists#friends_index'
    get '/upcoming-wishlists' => 'wishlists#upcoming_index'
  end
end

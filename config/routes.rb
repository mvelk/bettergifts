Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :products
    resources :wishlist_items
    resources :wishlists, only: [:index, :show, :destroy, :create]
    get '/friends-wishlists' => 'wishlists#friends_index'
    get '/upcoming-wishlists' => 'wishlists#upcoming_index'
    post '/product-search' => 'product_search#keyword_search'
  end
end

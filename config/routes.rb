Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users
    resources :products
    resources :wishlist_items
    resources :wishlists
    resource :session
  end
end

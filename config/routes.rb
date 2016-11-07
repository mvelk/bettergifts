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

    get '/friends/:user_id' => 'friendships#friends_list'
    get '/pending-requests/:user_id' => 'friendships#pending_requests'
    post '/add-friend' => 'friendships#friend_request'
    patch '/update-friendship' => 'friendships#update_friend_request'
    post '/friendship-status' => 'friendships#check_friendship'
    delete '/remove-friend' => 'friendships#remove_friend'

  end
end

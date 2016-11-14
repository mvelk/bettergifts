json.array! @past_wishlists do |past_wishlist|
  json.wishlist_id past_wishlist.id
  json.wishlist_title past_wishlist.title
  json.wishlist_date past_wishlist.event_date
  json.set! 'wishlist_items' do
    json.array! past_wishlist.items do |item|
      next unless item.purchaser_id
      json.partial! 'api/purchases/purchase2', purchase: item
    end
  end
end

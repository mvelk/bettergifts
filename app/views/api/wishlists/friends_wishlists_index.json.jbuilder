require 'Date'
json.array! (@wishlists) do |wishlist|
  json.id wishlist.id
  json.title wishlist.title
  json.image_url wishlist.image_url
  json.event_date wishlist.event_date.strftime("%b %d, %Y")
  json.wisher_id wishlist.wisher_id
  json.wisher_name wishlist.wisher.username
  json.num_purchasers wishlist.purchasers.length
  json.num_items wishlist.items.length
end

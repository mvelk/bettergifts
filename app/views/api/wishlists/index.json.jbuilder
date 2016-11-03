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
  # .json.partial! 'api/wishlist_items/wishlist_item', collection: wishlist.items, as: :item
end

#
#
# json.array!(@lenders) do |json, lender|
#   json.(lender, :id, :email, :latitude, :longitude)
#   json.inventories lender.inventories do |json, inventory|
#     json.(inventory, :id, :itemlist_id, :description)
#   end
# end

# json.products @products do |product|
#   json.name product.name
#   json.price number_to_currency product.price
#   json.active product.active
#
#   json.reviews product.reviews do |review|
#     json.user review.user
#     json.rating review.rating
#     json.body review.body
#   end
# end

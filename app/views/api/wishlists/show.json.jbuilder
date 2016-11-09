json.extract! @wishlist, :id, :title, :image_url, :wisher, :items, :products
json.event_date @wishlist.event_date.strftime("%b %d, %Y")

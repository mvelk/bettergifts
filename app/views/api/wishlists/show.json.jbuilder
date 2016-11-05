json.extract! @wishlist, :id, :title, :image_url, :wisher, :purchasers, :items, :products
json.event_date @wishlist.event_date.strftime("%b %d, %Y")

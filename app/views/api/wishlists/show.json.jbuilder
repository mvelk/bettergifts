json.extract! @wishlist, :id, :title, :image_url, :wisher, :purchasers, :items
json.set! 'products' do
  json.partial! 'api/products/product', products: @wishlist.products
end
json.event_date @wishlist.event_date.strftime("%b %d, %Y")

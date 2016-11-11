products.each do |product|
  json.set! product.id do
    json.extract! product, :asin_id, :medium_image, :large_image, :title, :brand, :color, :features, :price, :manufacturer, :manufacturer_part_num
  end
end

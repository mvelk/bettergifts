json.array! @future_purchases do |future_purchase|
  json.partial! 'api/purchases/purchase', purchase: future_purchase
end

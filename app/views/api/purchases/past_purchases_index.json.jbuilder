json.array! @past_purchases do |past_purchase|
  json.partial! 'api/purchases/purchase', purchase: past_purchase
end

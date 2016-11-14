json.array! @purchases do |purchase|
  json.partial! 'api/purchases/purchase', purchase: purchase
end

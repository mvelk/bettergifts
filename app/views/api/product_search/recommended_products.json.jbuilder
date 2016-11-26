json.array! @response_collection do |response|
  json.asin response['ASIN']
  json.mediumImage response['MediumImage']
  json.largeImage response['LargeImage']
  json.imageSets response['ImageSets']
  json.itemAttributes do
    json.title response['ItemAttributes']['Title']
    json.brand response['ItemAttributes']['Brand']
    json.color response['ItemAttributes']['Color']
    json.feature response['ItemAttributes']['Feature']
    json.itemDimensions response['ItemAttributes']['ItemDimensions']
    price = nil
    if response['OfferSummary'] && response['OfferSummary']['LowestNewPrice']
      price = response['OfferSummary']['LowestNewPrice']['FormattedPrice']
    elsif response['ItemAttributes']
      price = response['ItemAttributes']['FormattedPrice']
    end
    json.price price
    json.manufacturer response['ItemAttributes']['Manufacturer']
    json.manufacturer_part_num response['ItemAttributes']['MPN']
  end
end

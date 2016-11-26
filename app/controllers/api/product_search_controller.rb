require 'vacuum'

class Api::ProductSearchController < ApplicationController
  def keyword_search
    request = Vacuum.new
    request.configure(
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      associate_tag: ENV['ASSOCIATE_TAG']
    )
    response_group = %w(ItemAttributes Images).join(',')

    # note Amazon Product Advertising API default behavior is to order
    # by best sellers
    if params[:item_pages]
      item_page1, item_page2, item_page3, item_page4 = params[:item_pages]
    else
      item_page1, item_page2, item_page3, item_page4 = 1, 2, 3, 4
    end

    response = request.item_search(
      query: {
        'ItemSearch.Shared.SearchIndex'   => 'All',
        'ItemSearch.Shared.Keywords'      => params[:query][:keywords],
        'ItemSearch.Shared.ResponseGroup' => response_group,
        'ItemSearch.1.ItemPage'           => item_page1,
        'ItemSearch.2.ItemPage'           => item_page2
      }
    )
    parsed_response = response.to_h

    @response_collection = parsed_response['ItemSearchResponse']['Items'][0]['Item']
      .concat(parsed_response['ItemSearchResponse']['Items'][1]['Item'])

    render :search_results
  end

  def recommended_products
    request = Vacuum.new
    request.configure(
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      associate_tag: ENV['ASSOCIATE_TAG']
    )
    response_group = %w(ItemAttributes Images).join(',')
    recent_desired_product_ids = current_user.desired_products.order(created_at: :desc).limit(5).map(&:asin_id)
    query = {
      "ItemId" => recent_desired_product_ids.join(','),
      'ItemSearch.Shared.ResponseGroup' => response_group,
      "SimilarityType" => "Random"
    }
    # query = { "ItemId" => recent_desired_product_ids.first }
    # recent_desired_products.each_with_index do |product, idx|
    #   query["ItemId"] = product.asin_id
    # end

    response = request.similarity_lookup(
      query: query
    )
    parsed_response = response.to_h
    @response_collection = parsed_response['SimilarityLookupResponse']['Items']['Item']
    render :search_results
  end

  private

  def product_search_params
    params.require(:query).permit(:keywords, :max_price, :min_price)
  end
end

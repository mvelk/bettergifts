require 'vacuum'

class Api::ProductSearchController < ApplicationController
  def keyword_search
    request = Vacuum.new
    request.configure(
      aws_access_key_id: 'AKIAIN4Z7E4FJ3USMHGQ',
      aws_secret_access_key: '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',
      associate_tag: 'bettergifts-io-20'
    )
    response_group = %w(ItemAttributes Images).join(',')

    # note Amazon Product Advertising API default behavior is to order
    # by best sellers


    response = request.item_search(
      query: {
        'ItemSearch.Shared.SearchIndex'   => 'All',
        'ItemSearch.Shared.Keywords'      => params[:query][:keywords],
        'ItemSearch.Shared.ResponseGroup' => response_group,
        'ItemSearch.1.ItemPage'           => 1,
        'ItemSearch.2.ItemPage'           => 2
      }
    )
    parsed_response = response.to_h

    @response_collection = parsed_response['ItemSearchResponse']['Items'][0]['Item'].concat(parsed_response['ItemSearchResponse']['Items'][1]['Item'])
    render :keyword_search_results
    # render json: @response_collection
  end

  private

  def product_search_params
    params.require(:query).permit(:keywords, :max_price, :min_price)
  end
end

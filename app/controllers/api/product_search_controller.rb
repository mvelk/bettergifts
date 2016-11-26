require 'vacuum'

class Api::ProductSearchController < ApplicationController
  def keyword_search
    request = Vacuum.new
    request.configure(
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      associate_tag: ENV['ASSOCIATE_TAG']
    )
    response_group = %w(ItemAttributes Images OfferSummary).join(',')

    # note Amazon Product Advertising API default behavior is to order
    # by best sellers

    @response_collection = []
    @keywords = params[:query][:keywords]
    @search_num = params[:query][:search_num].to_i
    @min_price = params[:query][:min_price]
    @max_price = params[:query][:max_price]
    @category = params[:query][:category]
    page_range = @search_num == 5 ? [5] : [@search_num, @search_num + 1]
    page_range.each do |item_page|
      query_object = {
        'Operation'            => 'ItemSearch',
        'SearchIndex'          => 'All',
        'Keywords'             => @keywords,
        'ResponseGroup'        => response_group,
        'ItemPage'             => item_page
      }
      query_object['MinimumPrice'] = @min_price if @min_price && @min_price != ""
      query_object['MaximumPrice'] = @max_price if @max_price && @max_price != ""
      query_object['SearchIndex'] = @category if @category && @category != ""
      response = request.item_search(query: query_object, persistent: true)
      parsed_response = response.to_h
      @response_collection += parsed_response['ItemSearchResponse']['Items']['Item']
    end
    @search_num += 2
    render :search_results
  end

  def recommended_products
    request = Vacuum.new
    request.configure(
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      associate_tag: ENV['ASSOCIATE_TAG']
    )
    response_group = %w(ItemAttributes Images OfferSummary).join(',')
    recent_desired_product_ids = current_user.desired_products.order(created_at: :desc).limit(5).map(&:asin_id)
    query = {
      "ItemId" => recent_desired_product_ids.join(','),
      'ItemSearch.Shared.ResponseGroup' => response_group,
      "SimilarityType" => "Random"
    }

    response = request.similarity_lookup(
      query: query
    )
    parsed_response = response.to_h
    @response_collection = parsed_response['SimilarityLookupResponse']['Items']['Item']
    render :recommended_products
  end

  private

  def product_search_params
    params.require(:query).permit(:keywords, :max_price, :min_price, :category, :search_num)
  end
end

class Api::PurchasesController < ApplicationController
  def past_purchases
    @past_purchases = User.find(params[:user_id]).gifted_wishlist_items.joins(:wishlist)
      .where('event_date < ?', Time.now)
      .includes(:product)
    render 'api/purchases/past_purchases_index'
  end

  def all_purchases
    @purchases = User.find(params[:user_id])
                    .gifted_wishlist_items
                    .include(:product)
    render 'api/purchases/all_purchases'
  end

  def future_purchases
    @future_purchases = User.find(params[:user_id])
      .gifted_wishlist_items
      .joins(:wishlist)
      .where('event_date >= ?', Time.now)
      .includes(:product)
      render 'api/purchases/future_purchases_index'
  end

  def received_gifts
    @past_wishlists = User.find(params[:user_id])
      .own_wishlists.where('event_date < ?', Time.now)
      .includes(:items)
      .includes(:products)
    render 'api/purchases/received_gifts'
  end
end

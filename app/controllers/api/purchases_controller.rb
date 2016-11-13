class Api::PurchasesController < ApplicationController
  def past_purchases
    @past_purchases = User.find(params[:id]).gifted_wishlist_items.joins(:wishlist)
      .where('event_date < ?', Time.now)
      .includes(:product)

  end

  def all_purchases
    @purchases = User.find(params[:id])
                    .gifted_wishlist_items
                    .include(:product)
  end

  def future_purchases
    @future_purchases = User.find(params[:id])
      .gifted_wishlist_items
      .joins(:wishlist)
      .where('event_date >= ?', Time.now)
      .includes(:product)
  end

  def received_gifts
    @past_wishlists = User.find(2).own_wishlists.where('event_date < ?', Time.now).includes(:items).includes(:products)
  end
end

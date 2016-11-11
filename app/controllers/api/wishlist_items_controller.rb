class Api::WishlistItemsController < ApplicationController
  def create
    @wishlist_item = WishlistItem.new(wishlist_item_params)

    if @wishlist_item.save
      render :show
    else
      render json: @wishlist_item.errors.messages, status: 422
    end
  end

  def commit_purchase
    @wishlist_item = WishlistItem.find(params[:wishlist_item_id])
    if @wishlist_item.update(purchaser_id: params[:purchaser_id])
      render json: @wishlist_item
    else
      render json: @wishlist_item.errors, status: 422
    end
  end

  def cancel_purchase
    @wishlist_item = WishlistItem.find(params[:wishlist_item_id])
    if @wishlist_item.update(purchaser_id: nil)
      render json: @wishlist_item
    else
      render json: @wishlist_item.errors, status: 422
    end
  end

  def destroy
    @wishlist_item = WishlistItem.find(params[:id])
    @wishlist_item.destroy
    render json: @wishlist_item
  end

  def update
    @wishlist_item = WishlistItem.find(params[:id])
    if @wishlist_item.update(wishlist_item_params)
      wishlist = @wishlist_item.wishlist
      render json: wishlist, include: [:items]
    else
      render json: @item.errors.messages, status: 422
    end
  end

  def index
    @wishlist_items = WishlistItem.all
  end

  def show
    @wishlist_item = WishlistItem.find(params[:id])
  end


end

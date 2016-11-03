class Api::WishlistItemsController < ApplicationController
  def create
    @wishlist_item = WishlistItem.new(wishlist_item_params)

    if @wishlist_item.save
      render :show
    else
      render json: @wishlist_item.errors.messages, status: 422
    end
  end

  def destroy
    @wishlist_item = WishlistItem.find(params[:id])
    @wishlist_item.destroy
    render :show
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

  private

  def wishlist_item_params
    params.require(:wishlist_item).permit(:product_id, :purchaser_id)
  end
end

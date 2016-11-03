class Api::WishlistsController < ApplicationController
  def create
    @wishlist = Wishlist.new(wishlist_params)

    if @wishlist.save
      render :show
    else
      render json: @wishlist.errors.messages, status: 422
    end
  end

  def destroy
    @wishlist = Wishlist.find(params[:id])
    @wishlist.destroy
    render :show
  end

  def update
    @wishlist = Wishlist.find(params[:id])
    if @wishlist.update(wishlist_params)
      render json: @wishlist, include: [:items]
    else
      render json: @item.errors.messages, status: 422
    end
  end

  def index
    @wishlists = Wishlist.all.select(:id, :name, :image_url)
  end

  def show
    @wishlist = Wishlist.find(params[:id])
  end

  private

  def wishlist_params
    params.require(:wishlist).permit(:title, :event_date, :description, :wisher_id, :description, :image_url)
  end
end

class Api::WishlistsController < ApplicationController
  def index
    @wishlists = current_user.own_wishlists.where(archived: false).includes(:items).includes(:purchasers)
  end

  def friends_index
    friends = current_user.relations.where(status: 1)
    @wishlists = Wishlist.where(wisher_id: friends).where(archived: false).includes(:items).includes(:purchasers)
  end

  def upcoming_index
    my_circle = current_user.relations.select(:id).where(status: 1)
    my_circle.push(current_user.id)
    @wishlists = Wishlist.where(wisher_id: my_circle).where(archived: false).includes(:items).includes(:purchasers)
  end

  def show
    @wishlist = Wishlist.find(params[:id])
  end
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



  private

  def wishlist_params
    params.require(:wishlist).permit(:title, :event_date, :description, :wisher_id, :description, :image_url)
  end
end

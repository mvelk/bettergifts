class Api::WishlistsController < ApplicationController
  def index
    @wishlists = current_user.own_wishlists.where(archived: false).includes(:items)
  end

  def friends_index
    friends_ids = Friendship.select(:friend_id).where(user_id: current_user.id).where(status: 1).map(&:friend_id)
    @wishlists = Wishlist.all.where(wisher_id: friends_ids).where(archived: false).includes(:items)
    render :index

  end

  def upcoming_index
    some_date = Time.now
    my_circle = Friendship.select(:friend_id).where(user_id: current_user.id).where(status: 1).map(&:friend_id)
    my_circle.push(current_user.id)
    @wishlists = Wishlist
                 .where(wisher_id: my_circle)
                 .where("event_date >= :date", date: some_date.tomorrow.beginning_of_day)
                 .where(archived: false)
                 .includes(:items)
    render :index
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

class Api::ProductsController < ApplicationController
  def create
    @product = Product.new
    @product.asin_id = params[:product][:asin]
    @product.large_image = params[:product][:largeImage][:URL]
    @product.medium_image = params[:product][:mediumImage][:URL]
    @product.title = params[:product][:itemAttributes][:title]
    @product.color = params[:product][:itemAttributes][:color]
    @product.brand = params[:product][:itemAttributes][:brand]
    if params[:product][:itemAttributes][:feature] == ""
      @product.features = "feature"
    else
      @product.features = params[:product][:itemAttributes][:feature].join('@@@')
    end
    @product.price = params[:product][:itemAttributes][:price]
    @product.manufacturer = params[:product][:itemAttributes][:manufacturer]
    @product.manufacturer_part_num = params[:product][:itemAttributes][:manufacturer_part_num]
    @product.medium_image ||= "http://6.kicksonfire.net/wp-content/uploads/2015/11/adidas-Yeezy-350-Boost-Moonrock-2.jpg?541b01"
    @product.large_image ||= "http://6.kicksonfire.net/wp-content/uploads/2015/11/adidas-Yeezy-350-Boost-Moonrock-2.jpg?541b01"
    if @product.save!

      @wishlist_item = WishlistItem.new(strong_params)
      @wishlist_item.product_id = @product.id
      @wishlist_item.save!
      render json: { product: @product, wishlistItem: @wishlist_item }
    else
      render json: @product.errors.messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :show
  end

  def index
    @wishlists = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  private

  def strong_params
    params.require(:wishlist_item).permit(:comment, :product_id, :wishlist_id, :purchaser_id)
  end
end

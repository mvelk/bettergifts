class Api::ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)

    if @product.save
      render :show
    else
      render json: @product.errors.messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :show
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render json: @product, include: [:items]
    else
      render json: @item.errors.messages, status: 422
    end
  end

  def index
    @wishlists = Product.all.select(:id, :name, :image_url)
  end

  def show
    @product = Product.find(params[:id])
  end

  private

  def product_params
    params.require(:product).permit(:title, :event_date, :description, :wisher_id, :description, :image_url)
  end
end

class Api::ProductsController < ApplicationController
  def create
    @product = Product.new

    if @product.save
      render json: { product: @product, wishlistId: params[:wishlistId] }
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

end

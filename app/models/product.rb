# == Schema Information
#
# Table name: products
#
#  id                    :integer          not null, primary key
#  asin_id               :string           not null
#  medium_image          :string           not null
#  large_image           :string           not null
#  title                 :string           not null
#  brand                 :string           not null
#  color                 :string           not null
#  features              :text             not null
#  price                 :string           not null
#  manufacturer          :string           not null
#  manufacturer_part_num :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Product < ApplicationRecord
  validates :asin_id, :medium_image, :large_image, :title, :features, :price, presence: true
  after_initialize :ensure_image_urls, :ensure_price

  has_many :wishlist_items,
  class_name: :WishlistItem,
  primary_key: :id,
  foreign_key: :product_id

  has_many :wishlists,
  through: :wishlist_items,
  source: :wishlist

  def ensure_price
    # TODO: change this image before sending to production
    self.price ||= ""
  end

end

# == Schema Information
#
# Table name: wishlist_items
#
#  id           :integer          not null, primary key
#  wishlist_id  :integer          not null
#  product_id   :integer          not null
#  purchaser_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  comment      :string
#

class WishlistItem < ApplicationRecord
  validates :wishlist_id, :product_id, presence: true

  belongs_to :wishlist,
  class_name: :Wishlist,
  primary_key: :id,
  foreign_key: :wishlist_id

  belongs_to :product,
  class_name: :Product,
  primary_key: :id,
  foreign_key: :product_id

  belongs_to :purchaser,
  class_name: :User,
  primary_key: :id,
  foreign_key: :purchaser_id

end

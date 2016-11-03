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
#

require 'test_helper'

class WishlistItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

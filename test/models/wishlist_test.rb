# == Schema Information
#
# Table name: wishlists
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  event_date  :date             not null
#  wisher_id   :integer          not null
#  archived    :boolean          default(FALSE), not null
#  description :text             not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class WishlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

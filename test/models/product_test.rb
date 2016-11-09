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

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

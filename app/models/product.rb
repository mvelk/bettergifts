# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  price      :decimal(, )      not null
#  short_desc :string           not null
#  full_desc  :text
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
  validates :name, :price, :short_desc, :image_url, presence: true

  after_initialize :ensure_image_url
  def ensure_image_url
    self.image_url ||= "http://6.kicksonfire.net/wp-content/uploads/2015/11/adidas-Yeezy-350-Boost-Moonrock-2.jpg?541b01"
  end
end

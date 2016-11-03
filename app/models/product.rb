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
  validates :image_url, format: { with: /\A(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?\Z/ }
  after_initialize :ensure_image_url
  def ensure_image_url
    self.image_url ||= "http://6.kicksonfire.net/wp-content/uploads/2015/11/adidas-Yeezy-350-Boost-Moonrock-2.jpg?541b01"
  end
end

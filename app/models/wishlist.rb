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

class Wishlist < ApplicationRecord
  validates :title, :event_date, :wisher_id, :description, presence: true
  validates :image_url, format: { with: /\A(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?\Z/ }
  validates :wisher_id, uniqueness: { scope: :title }
  after_initialize :ensure_image_url

  has_many :purchasers,
  through: :items,
  source: :purchaser

  has_many :items,
  class_name: :WishlistItem,
  primary_key: :id,
  foreign_key: :wishlist_id

  has_many :products,
  through: :items,
  source: :product

  belongs_to :wisher,
  class_name: :User,
  primary_key: :id,
  foreign_key: :wisher_id

  def ensure_image_url
    self.image_url = "http://res.cloudinary.com/dkpumd3gf/image/upload/v1478143290/theme-christmas_regdkd.jpg" if (self.image_url == '')
  end
end

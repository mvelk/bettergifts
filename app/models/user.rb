# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :username, length: { minimum: 1 }
  validates :email, format: /@/

  has_many :own_wishlists,
  class_name: :Wishlist,
  primary_key: :id,
  foreign_key: :wisher_id

  has_many :own_wishlist_items,
  through: :wishlists,
  source: :items

  has_many :desired_products,
  through: :wishlist_items,
  source: :product

  has_many :gifted_wishlist_items,
  class_name: :WishlistItem,
  primary_key: :id,
  foreign_key: :purchaser_id

  has_many :gifted_products,
  through: :gifted_wishlist_items,
  source: :product

  attr_reader :password
  after_initialize :ensure_session_token
  after_initialize :ensure_image_url

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.valid_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_image_url
    self.image_url ||= "http://res.cloudinary.com/dkpumd3gf/image/upload/v1478280716/default_user_icon_k220an.png"
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end

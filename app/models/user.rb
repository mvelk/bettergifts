# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string           default("/app/assets/images/default_user_icon.png"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
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

  has_many :relationships,
  class_name: :Friendship,
  primary_key: :id,
  foreign_key: :user_one_id

  has_many :relations,
  through: :relationships,
  source: :user_two

  attr_reader :password
  after_initialize :ensure_session_token

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

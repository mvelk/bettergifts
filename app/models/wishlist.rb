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
    text_content = self.title
    text_content += self.description
    text_content = text_content.downcase
    if (self.image_url == '')
      if /birthday|bday/.match(text_content)
        birthday_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_789/v1478983911/bday_qwnu1t.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_702/v1478983729/StockSnap_1C1A9389B4_f6ldq2.jpg'

        ]
        self.image_url = birthday_images.sample
      elsif /christmas|xmas/.match(text_content)
        christmas_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_712/v1478937069/christmas-santa-claus-fig-decoration_d7ouej.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_727/v1478937138/pexels-photo_gh95it.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_1000/v1478937079/christmas_tvyhkd.jpg'
        ]
        self.image_url = christmas_images.sample
      elsif /anniversary/.match(text_content)
        anniversary_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_794/v1478936899/gift-giving_ipckx8.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/v1478937148/plate-holiday-love-holidays_qzbw9g.jpg'
        ]
        self.image_url = anniversary_images.sample
      elsif /wedding|marry|married|the\sknot/.match(text_content)
        marriage_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_726/v1478937312/pexels-photo-132759_gwgrun.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,h_516,w_790/v1478979668/wedding_qrnpoj.jpg'
        ]
        self.image_url = marriage_images.sample
      elsif /valentines/.match(text_content)
        valentines_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_726/v1478937132/pexels-photo-196664_j2cfqz.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_842/v1478981154/valentines-candies_u5bvam.jpg'
        ]
        self.image_url = valentines_images.sample
      elsif /graduation|graduate/.match(text_content)
        graduation_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_809/v1478981685/grad3_hddl9e.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_809/v1478981685/grad3_hddl9e.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_809/v1478981685/grad3_hddl9e.jpg'
        ]
        self.image_url = graduation_images.sample
      elsif /cat/.match(text_content)
        self.image_url = 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_809/v1478983841/278H_ahiibc.jpg'
      elsif /holiday/.match(text_content)
        holiday_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_756/v1478937118/paper-933661_kht5em.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_740/v1478936861/business-gifts-for-professionals_msxayh.jpg'
        ]
        self.image_url = holiday_images.sample
      else
        gift_images = [
          'http://res.cloudinary.com/dkpumd3gf/image/upload/v1478982510/gift1_gqfv2b.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_771/v1478936874/Dollarphotoclub_96332869_yeuxsh.jpg',
          'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_759/v1478143290/theme-christmas_regdkd.jpg'
        ]
        self.image_url = gift_images.sample
      end
    end
  end
end

# == Schema Information
#
# Table name: friendships
#
#  id             :integer          not null, primary key
#  user_one_id    :integer          not null
#  user_two_id    :integer          not null
#  status         :integer          not null
#  action_user_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Friendship < ApplicationRecord
  validates :user_one_id, :user_two_id, :status, :action_user_id, presence: true
  validates :user_one_id, uniqueness: { scope: :user_two_id, message: "cannot have multiple relationships with a user"}

  belongs_to :user_one,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_one_id

  belongs_to :user_two,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_two_id
end

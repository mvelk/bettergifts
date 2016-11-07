# == Schema Information
#
# Table name: friendships
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  friend_id      :integer          not null
#  status         :integer          not null
#  action_user_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
class Friendship < ApplicationRecord
  validates :user_one_id, :user_two_id, :status, :action_user_id, presence: true
  validates :user_one_id, uniqueness: { scope: :user_two_id, message: "user pair can only have one relationship" }
end

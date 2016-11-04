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
  validates :user_id, :friend_id, :status, :action_user_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id, message: "cannot have multiple relationships with a user" }
end

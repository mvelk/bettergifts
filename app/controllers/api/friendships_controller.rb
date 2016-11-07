class Api::FriendshipsController < ApplicationController
  #create
  def friend_request

  end

  #update
  def accept_friend_request

  end

  #show
  def check_friendship
    Friendship.select_all.where(:user_one)
  end

  #index1
  def friends_list

  end

  #index2
  def pending_request

  end

  #7
  def remove_friend

  end

  private

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id, :)
  end
end

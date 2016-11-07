class Api::FriendshipsController < ApplicationController
  # create
  def friend_request
    user_one_id = params[:friendship][:user_one_id]
    user_two_id = params[:friendship][:user_two_id]
    action_user_id = params[:friendship][:action_user_id]

    smaller_user_id = user_one_id < user_two_id ? user_one_id : user_two_id
    larger_user_id = user_one_id > user_two_id ? user_one_id : user_two_id

    # first check if any request already exists
    existing_friendship = Friendship.where('user_one_id = ? AND user_two_id = ?',
        smaller_user_id,
        larger_user_id
      ).first

    if existing_friendship
      case existing_friendship.status
      when 0
        # if same initiator, throw error
        if existing_friendship.action_user_id == action_user_id
          render json: 'cannot add friend when request still pending', status: 400
        else
        # otherwise, accept pending request
          existing_friendship.status = 1
          existing_friendship.update
          render json: existing_friendship
        end
      when 1
        render json: 'user is already a friend'
      when 2
        # as above, if same initiator, throw error
        # error does not tell user request was rejected
        if existing_friendship.action_user_id == action_user_id
          render json: 'cannot add friend when request still pending', status: 400
        else
        # otherwise, reset friendship request to pending
        # set action_user_id to new requestor
          existing_friendship.status = 0
          existing_friendship.action_user_id = action_user_id
          existing_friendship.update
        end
      when 3
        render json: 'cannot add friend'
      end
    end

    # if no friendship currently exists, make new one
    friendship = Friendship.new
    friendship.status = 0
    friendship.user_one_id = smaller_user_id
    friendship.user_two_id = larger_user_id
    friendship.action_user_id = action_user_id

    if friendship.save
      render json: friendship
    else
      render json: friendship.errors, status: 400
    end
  end

  # update1
  def update_friend_request
    new_status = params[:friendship][:user_one_id]
    if new_status = 0
      render json: 'cannot change status to pending', status: 400
    end

    user_one_id = params[:friendship][:user_one_id]
    user_two_id = params[:friendship][:user_two_id]

    smaller_user_id = user_one_id < user_two_id ? user_one_id : user_two_id
    larger_user_id = user_one_id > user_two_id ? user_one_id : user_two_id

    friendships = Friendship.where('user_one_id = ? AND user_two_id = ?',
        smaller_user_id,
        larger_user_id
      )

    render json: 'no friendship record found', status: 400 if friendships.empty?

    friendship = friendships.first
    friendship.status = new_status

    if friendship.update
      render json: friendship
    else
      render json: friendship.errors, status: 400
    end
  end


  # show

  def check_friendship
    user_one_id = params[:friendship][:user_one_id]
    user_two_id = params[:friendship][:user_two_id]

    # because friendship records always stored with smaller user_id as user_one_id,
    # only need to check one permutation of where statement, instead of two
    smaller_user_id = user_one_id < user_two_id ? user_one_id : user_two_id
    larger_user_id = user_one_id > user_two_id ? user_one_id : user_two_id

    friendships = Friendship.all
      .where('user_one_id = ? AND user_two_id = ?',
        smaller_user_id,
        larger_user_id
      ).map(&:status)

    render json: { user_one_id: user_one_id, user_two_id: user_two_id, status: 'none' } if friendships.empty?

    case friendships.first
    when 0
      render json: { user_one_id: user_one_id, user_two_id: user_two_id, status: 'pending' }
    when 1
      render json: { user_one_id: user_one_id, user_two_id: user_two_id, status: 'accepted' }
    when 2
      render json: { user_one_id: user_one_id, user_two_id: user_two_id, status: 'declined' }
    when 3
      render json: { user_one_id: user_one_id, user_two_id: user_two_id, status: 'blocked' }
    end
  end

  #index1
  def friends_list
    user_id = params[:friendship][:user_one_id]
    friendships = Friendship.all.where('(user_one_id = ? OR user_two_id = ?) AND (status = 1)', user_id, user_id)
    user_ones = friendships.map(&:user_one).uniq
    user_twos = friendships.map(&:user_two).uniq
    friends = user_ones.concat(user_twos)
    friends.delete_if { |friend| friend.id == user_id }
    render json: friends
  end

  #index2
  def pending_requests
    user_id = params[:user_id]
    friendships = Friendship.all.where('(user_one_id = ? OR user_two_id = ?) AND (status = 0)', user_id, user_id)
    user_ones = friendships.map(&:user_one).uniq
    user_twos = friendships.map(&:user_two).uniq
    friends = user_ones.concat(user_twos)
    friends.delete(user_id)
    render json: friends
  end

  def remove_friend
    user_one_id = params[:friendship][:user_one_id]
    user_two_id = params[:friendship][:user_two_id]

    smaller_user_id = user_one_id < user_two_id ? user_one_id : user_two_id
    larger_user_id = user_one_id > user_two_id ? user_one_id : user_two_id

    friendship = Friendship.all.where('user_one_id = ? AND user_two_id = ? AND status = 1', smaller_user_id, larger_user_id)
    if friendship.destroy
      render json: friendship
    else
      render json: "failed to remove friend", status: 400
    end
  end

end

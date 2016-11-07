class Api::FriendshipsController < ApplicationController
  # create
  def friend_request
    current_user_id = current_user.id
    friend_id = params[:friend_id]
    action_user_id = current_user.id

    smaller_user_id = current_user_id < friend_id ? current_user_id : friend_id
    larger_user_id = current_user_id > friend_id ? current_user_id : friend_id

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
          existing_friendship.update(status: 1)
          render json: existing_friendship
        end
      when 1
        render json: 'user is already a friend', status: 400
      when 2
        # as above, if same initiator, throw error
        # error does not tell user request was rejected
        if existing_friendship.action_user_id == action_user_id
          render json: 'cannot add friend when request still pending', status: 400
        else
        # otherwise, reset friendship request to pending
        # set action_user_id to new requestor
          existing_friendship.update(status: 0, action_user_id: action_user_id)
          render json: friendship
        end
      when 3
        render json: 'cannot add friend', status: 400
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
    new_status = params[:status]
    if new_status == 0
      render json: 'cannot change status to pending', status: 400
    end

    current_user_id = current_user.id
    friend_id = params[:friend_id]

    smaller_user_id = current_user_id < friend_id ? current_user_id : friend_id
    larger_user_id = current_user_id > friend_id ? current_user_id : friend_id

    friendship = Friendship.where('user_one_id = ? AND user_two_id = ?',
        smaller_user_id,
        larger_user_id
      ).first

    render json: 'no friendship record found', status: 400 unless friendship

    if friendship.update(status: new_status)
      render json: friendship
    else
      render json: friendship.errors, status: 400
    end
  end


  # show

  def check_friendship
    current_user_id = current_user.id
    friend_id = params[:friend_id].to_i

    # because friendship records always stored with smaller user_id as user_one_id,
    # only need to check one permutation of where statement, instead of two
    smaller_user_id = current_user_id < friend_id ? current_user_id : friend_id
    larger_user_id = current_user_id > friend_id ? current_user_id : friend_id

    friendship_status = Friendship.where('user_one_id = ? AND user_two_id = ?',
        smaller_user_id,
        larger_user_id
      ).map(&:status).first

    friend = User.find(friend_id)

    render json: { user: friend, status: 'none' } unless friendship_status

    case friendship_status
    when 0
      render json: { user: friend, status: 'pending' }
    when 1
      render json: { user: friend, status: 'accepted' }
    when 2
      render json: { user: friend, status: 'declined' }
    when 3
      render json: { user: friend, status: 'blocked' }
    end
  end

  #index1
  def friends_list
    user_id = params[:user_id]
    friendships = Friendship.all.where('(user_one_id = ? OR user_two_id = ?) AND (status = 1)', user_id, user_id)
    user_ones = friendships.map(&:user_one)
    user_twos = friendships.map(&:user_two)
    friends = user_ones.concat(user_twos).uniq(&:id)
    friends.reject! { |friend| friend.id.to_i == user_id.to_i }
    render json: friends
  end

  #index2
  def pending_requests
    user_id = params[:user_id]
    friendships = Friendship.all.where('(user_one_id = ? OR user_two_id = ?) AND (status = 0)', user_id, user_id)
    user_ones = friendships.map(&:user_one)
    user_twos = friendships.map(&:user_two)
    pending_friends = user_ones.concat(user_twos).uniq(&:id)
    pending_friends.reject! { |friend| friend.id.to_i == user_id.to_i }
    render json: pending_friends
  end

  def remove_friend
    current_user_id = current_user.id
    friend_id = params[:friend_id]

    smaller_user_id = current_user_id < friend_id ? current_user_id : friend_id
    larger_user_id = current_user_id > friend_id ? current_user_id : friend_id

    friendship = Friendship.all.where('user_one_id = ? AND user_two_id = ? AND status = 1', smaller_user_id, larger_user_id).first
    if Friendship.destroy(friendship.id)
      render json: friend_id
    else
      render json: "failed to remove friend", status: 400
    end
  end

end

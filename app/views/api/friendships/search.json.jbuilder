json.array! @search_results do |user|
  friend_status = -1
  action_user_id = nil
  updated_at = nil
  if @current_user_relationships1.where(user_two_id: user.id).first
    friend_status = @current_user_relationships1.where(user_two_id: user.id).first.status
    action_user_id = @current_user_relationships1.where(user_two_id: user.id).first.action_user_id
    updated_at = @current_user_relationships1.where(user_two_id: user.id).first.updated_at
  elsif @current_user_relationships2.where(user_one_id: user.id).first
    friend_status = @current_user_relationships2.where(user_one_id: user.id).first.status
    action_user_id = @current_user_relationships2.where(user_one_id: user.id).first.action_user_id
    updated_at = @current_user_relationships2.where(user_one_id: user.id).first.updated_at
  end
  next if friend_status == 3
  next if user.id == current_user.id
  json.id user.id
  json.email user.email
  json.image_url user.image_url
  json.first_name user.first_name
  json.last_name user.last_name
  json.username user.username
  json.friend_status friend_status
  json.action_user_id action_user_id
  json.updated_at updated_at ? updated_at.strftime("%b %d, %Y") : nil
end

export const fetchFriendsList = (userId, success, error) => {
  $.ajax({
    method: 'get',
    url: `/api/friends/${userId}`,
    success,
    error
  });
};

export const fetchPendingRequests = (userId, success, error) => {
  $.ajax({
    method: 'get',
    url: `/api/pending-requests/${userId}`,
    success,
    error
  });
};

export const getFriendshipStatus = (friendId, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/friendship-status',
    data: {
      friend_id: friendId
    },
    success,
    error
  });
};

export const addFriend = (friendId, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/add-friend',
    data: { friend_id: friendId },
    success,
    error
  });
};

export const updateFriendship = (friendId, status, success, error) => {
  $.ajax({
    method: 'patch',
    url: '/api/update-friendship',
    data: { friendId: friendId, status: status },
    success,
    error
  });
};

export const unfriend = (friendId, success, error) => {
  $.ajax({
    method: 'delete',
    url: '/api/remove-friend',
    data: { friend_id: friendId },
    success,
    error
  });
};

export const GET_FRIENDSHIP_STATUS = "GET_FRIENDSHIP_STATUS";
export const RECEIVE_FRIEND_STATUS = "RECEIVE_FRIEND_STATUS";

export const FETCH_FRIENDS_LIST = "FETCH_FRIENDS_LIST";
export const RECEIVE_FRIENDS_LIST = "RECEIVE_FRIENDS_LIST";
export const ADD_FRIEND = "ADD_FRIEND";
export const UNFRIEND = "UNFRIEND";
export const BLOCK_FRIEND = "BLOCK_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const ACCEPT_FRIEND_REQUEST = "ACCEPT_FRIEND_REQUEST";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REJECT_FRIEND_REQUEST = "REJECT_FRIEND_REQUEST";
export const REMOVE_PENDING_REQUEST = "REMOVE_PENDING_REQUEST";

export const FETCH_PENDING_REQUESTS = "FETCH_PENDING_REQUESTS";
export const RECEIVE_PENDING_REQUESTS = "RECEIVE_PENDING_REQUESTS";
export const SEARCH_FOR_FRIENDS = "SEARCH_FOR_FRIENDS";
export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
export const CLEAR_USER_SEARCH_RESULTS = "CLEAR_USER_SEARCH_RESULTS";

export const clearUserSearchResults = () => ({
  type: CLEAR_USER_SEARCH_RESULTS
});

export const receiveUserSearchResults = (users) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  users
});

export const searchForFriends = (queryString) => ({
  type: SEARCH_FOR_FRIENDS,
  queryString
});

export const fetchFriendsList = (userId) => ({
  type: FETCH_FRIENDS_LIST,
  userId
});

export const fetchPendingRequests = (userId) => ({
  type: FETCH_PENDING_REQUESTS,
  userId
});

export const receiveFriendsList = (friends) => ({
  type: RECEIVE_FRIENDS_LIST,
  friends
});

export const receivePendingRequests = (pendingFriends) => ({
  type: RECEIVE_PENDING_REQUESTS,
  pendingFriends
});

export const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
});

export const getFriendshipStatus = (friendId) => ({
  type: GET_FRIENDSHIP_STATUS,
  friendId
});

export const addFriend = (friendId) => ({
  type: ADD_FRIEND,
  friendId
});

export const acceptFriendRequest = (friendId) => ({
  type: ACCEPT_FRIEND_REQUEST,
  status: 1,
  friendId
});

export const rejectFriendRequest = (friendId) => ({
  type: REJECT_FRIEND_REQUEST,
  status: 2,
  friendId
});

export const blockFriend = (friendId) => ({
  type: BLOCK_FRIEND,
  status: 3,
  friendId
});

export const unfriend = (friendId) => ({
  type: UNFRIEND,
  friendId
});

export const removeFriend = (userId) => ({
  type: REMOVE_FRIEND,
  userId
});

export const removePendingRequest = (friendship) => ({
  type: REMOVE_PENDING_REQUEST,
  friendship
});

export const receiveFriendStatus = (friendStatus) => ({
  type: RECEIVE_FRIEND_STATUS,
  friendStatus
});

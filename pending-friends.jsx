<div className="friends-index-content-container">
  <h3>Friend Requests</h3>
  {this.props.pendingRequests.map((pendingFriend, idx) => (
    <PendingRequestIndexItem
      pendingFriend={pendingFriend}
      acceptFriendRequest={this.props.acceptFriendRequest}
      rejectFriendRequest={this.props.rejectFriendRequest}
      blockFriend={this.props.blockFriend}
      key={idx} />
  ))}
</div>

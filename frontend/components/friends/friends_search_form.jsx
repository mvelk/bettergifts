import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
class FriendsSearchForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			queryString: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
	}

	handleChange(e) {
    this.setState({ queryString: e.currentTarget.value }, () => {
      if (this.state.queryString.length > 0) {
        this.props.searchForFriends(this.state.queryString);
      } else {
        this.props.clearUserSearchResults();
      }
    });
	}

  handleClose(e) {
    this.props.closeUserSearchFormModal();
    this.props.clearUserSearchResults();
    this.setState({ queryString: "" });
  }

  _handleAddFriend(userId) {
    return (e) => {
      console.log(userId);
      this.props.addFriend(userId);
			this.props.searchForFriends(this.state.queryString);
    };
  }
	_handleAcceptFriendRequest(userId) {
    return (e) => {
      console.log(userId);
      this.props.acceptFriendRequest(userId);
			this.props.searchForFriends(this.state.queryString);
    };
  }

	handleSubmit(e) {
		e.preventDefault();
    this.props.searchForFriends(this.state.queryString);
	}

	friendButton(user) {
		switch(user.friend_status) {
			case -1:
				return (
					<RaisedButton
						label="Add Friend"
						style={{height:'24'}}
						labelStyle={{fontSize:'12'}}
						icon={<i className="material-icons md-light md-18">person_add</i>}
						primary={true}
						onTouchTap={ this._handleAddFriend(user.id) }
						/>
				);
			case 0:
				if (user.action_user_id == user.id) {
					return (
						<RaisedButton
							label="Confirm Friend"
							style={{height:'24'}}
							labelStyle={{fontSize:'12'}}
							icon={<i className="material-icons md-light md-18">person_add</i>}
							secondary={true}
							onTouchTap={ this._handleAcceptFriendRequest(user.id) }
							/>
					);
				} else {
					return (
						<RaisedButton
							label="Pending"
							style={{height:'24'}}
							labelStyle={{fontSize:'12'}}
							icon={<i className="material-icons md-light md-18">person_outline</i>}
							disabled={true}
							/>
					);
				}
			case 1:
				return (
					`Friends since ${user.updated_at}`
				);
			case 2:
				if (user.action_user_id == user.id) {
					return (
						<RaisedButton
							label="Pending"
							style={{height:'24'}}
							labelStyle={{fontSize:'12'}}
							icon={<i className="material-icons md-light md-18">person_outline</i>}
							disabled={true}
							/>
					);
				} else {
					return (
						<RaisedButton
							label="Add Friend"
							style={{height:'24'}}
							labelStyle={{fontSize:'12'}}
							icon={<i className="material-icons md-light md-18">person_add</i>}
							primary={true}
							onTouchTap={ this._handleAddFriend(user.id) }
							/>
					);
				}
		}

	}

	render() {
    const style = {
       margin: 12,
    };

    const actions = [];
    const customContentStyle = {
      width: '35%',
			minWidth: '450'
    };

		return (
			<div className="form-container">
        <Dialog
                modal={false}
                actions={actions}
                open={this.props.userSearchModalOpen}
                onRequestClose={this.handleClose}
								autoScrollBodyContent={true}
                contentStyle={customContentStyle}>

          <form onSubmit={this.handleSubmit} className="login-form-box">

            <h2 className="form-header">Find More Friends</h2>
              <div className="search-bar">

    						<TextField
                  value={this.state.queryString}
    							onChange={this.handleChange}
                  floatingLabelText="Search by username, email, or name"
                  fullWidth={true}
                />
              </div>

          </form>
          <div className="user-search-results">
            {this.props.userSearchResults.map((user, idx) => (
							<div key={user.id} className="user-search-result">
                <div className="user-search-result-info">
                  <Avatar size={50} src={user.image_url} style={{marginRight: 20}} />
									<div className="user-search-result-text">
										<span style={{color: 'black'}}>{user.first_name + ' ' + user.last_name}</span><br />
										{user.username}
									</div>
                </div>
									{this.friendButton(user)}
              </div>
            ))}
          </div>
        </Dialog>


			</div>
		);
	}

}

export default (FriendsSearchForm);

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {hashHistory} from 'react-router';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const styles = {
  avatar: {
    marginRight: 20,
  },
};

class FriendsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value}, () => {
      switch (this.state.value) {
        case 2:
          this.props.unfriend(this.props.friend.id);
          break;
        case 3:
          this.props.blockFriend(this.props.friend.id);
          break;
      }
    });
  }

  render() {
    return(
      <div className="friends-index-item" >
        <Avatar size={35} src={this.props.friend.image_url} style={styles.avatar} />
        <h4>{this.props.friend.username}</h4>
        <div className="friends-index-item-button-wrapper">
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Friends" />
            <MenuItem value={2} primaryText="Unfriend" />
            <MenuItem value={3} primaryText="Block" />
          </DropDownMenu>
        </div>
      </div>
    );
  }
}

export default FriendsIndexItem;

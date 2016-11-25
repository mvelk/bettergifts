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
    marginRight: 30,
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
      <Paper className="friends-index-paper" zDepth={2}>
        <div className="friends-index-item" >
          <div className="friends-index-item-content">
            <Avatar size={50} src={this.props.friend.image_url} style={styles.avatar} />
            <div className="friends-index-item-text">
              <h4>{this.props.friend.first_name + " " + this.props.friend.last_name}</h4>
              {this.props.friend.username}
            </div>
          </div>
          <div className="friends-index-item-button-wrapper">
            <DropDownMenu
              value={this.state.value}
              labelStyle={{ color: '#0d47a1'}}
              underlineStyle={{ border: 'none'}}
              onChange={this.handleChange}>
              <MenuItem
                style={{ color: '#0d47a1' }}
                leftIcon={<i className="material-icons md-22">people</i>}
                value={1}
                primaryText="Friends" />
              <MenuItem
                style={{ color: '#0d47a1' }}
                leftIcon={<i className="material-icons md-22">people_outline</i>}
                value={2}
                primaryText="Unfriend" />
              <MenuItem
                style={{ color: '#0d47a1' }}
                leftIcon={<i className="material-icons md-22">highlight_off</i>}
                value={3}
                primaryText="Block" />
            </DropDownMenu>
          </div>
        </div>
      </Paper>
    );
  }
}

export default FriendsIndexItem;

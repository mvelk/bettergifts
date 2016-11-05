import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { blue900 } from 'material-ui/styles/colors';
import WishlistShowItem from './wishlist_show_item';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  tab: {
    backgroundColor: blue900
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  avatar: {
    marginRight: 40,
  },
};

class WishlistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params.wishlistId);
    if (this.props.params.wishlistId) {
      this.props.fetchWishlistDetail(this.props.params.wishlistId);
    }
  }

  add_item_button() {
    if (this.props.wishlistDetail.wisher.id === this.props.currentUser.id) {
      return (
        <div className="wishlist-show_actions">
          <RaisedButton
            label="Delete Wishlist"
            icon={<i className="material-icons md-light">delete</i>}
            primary={true}
            onTouchTap={ () => alert("you clicked me") }
          />
          <RaisedButton
            label="Find More Products"
            icon={<i className="material-icons md-light">search</i>}
            secondary={true}
            onTouchTap={ () => alert("you clicked me") }
          />
        </div>
      );
    } else {
      return (
        <RaisedButton
          label="Subscribe to Wishlist"
          icon={<i className="material-icons md-light">loyalty</i>}
          secondary={true}
          onTouchTap={ () => alert("you clicked me") }
        />
      );
    }
  }
  render() {
    console.log(this.props.wishlistDetail);
    if (this.props.wishlistDetail.id === undefined) {
      return (

          <div className="content-wrapper flex-centered">
            <CircularProgress size={200} thickness={5} />
          </div>

      );
    } else {
      return(
        <h1>we made it</h1>
      );
    }
  }
}

export default WishlistShow;

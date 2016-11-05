import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { blue900 } from 'material-ui/styles/colors';
import WishlistShowItem from './wishlist_show_item';

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
    this.props.fetchWishlistDetail(this.props.params.wishlistId);
  }

  add_item_button() {
    if (this.props.wisher.id === this.props.currentUser.id) {
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
    if (this.props.wishlist_details === undefined) {
      return (
        <CircularProgress size={80} thickness={5} />
      );
    } else {
      return(
        <div>
          <section className="wishlist-show-heading content-wrapper">
            <div className="wishlist-show-heading-content">
              <Avatar size={70} src={this.props.wisher.image_url} style={styles.avatar} />
              <hgroup>
                <h2 style={styles.headline}>{this.props.wishlist_details.title}</h2>
                <p>{this.props.wisher.username}&#8217; wishlists</p>
                <p>{this.props.wishlist_details.description}</p>
                <p>{this.props.wishlist_details.event_date}</p>
              </hgroup>
            </div>
            {this.add_item_button()}
          </section>
          <section className="wishlist-index-items content-wrapper">
            {this.props.items.map((item, idx) => (
              <WishlistShowItem product={this.props.products[idx]} item={item} key={idx} />
            ))}
          </section>
        </div>
      );
    }
  }
}

export default WishlistShow;

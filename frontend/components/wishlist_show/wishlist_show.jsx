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

export default class WishlistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('we received props');
    console.log(nextProps.params['wishlistId']);
    if (nextProps.params['wishlistId']) {
      this.props.fetchWishlistDetail(nextProps.params['wishlistId']);
    }
  }

  addItemButton() {
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
    console.log('rendering');
    console.log(this.props.wishlistDetail);
    if (this.props.wishlistDetail.id === undefined) {
      return (

          <div className="content-wrapper flex-centered">
            <CircularProgress size={200} thickness={5} />
          </div>

      );
    } else {
      return(
        <div>
          <section className="wishlist-show-heading content-wrapper">
            <div className="wishlist-show-heading-content">
              <Avatar size={70} src={this.props.wishlistDetail.wisher.image_url} style={styles.avatar} />
              <hgroup>
                <h2 style={styles.headline}>{this.props.wishlistDetail.title}</h2>
                <p>{this.props.wishlistDetail.wisher.username}&#8217; wishlists</p>
                <p>{this.props.wishlistDetail.description}</p>
                <p>{this.props.wishlistDetail.event_date}</p>
              </hgroup>
            </div>

            {this.addItemButton()}

          </section>
          <section className="wishlist-index-items content-wrapper">
            {this.props.wishlistDetail.items.map((item, idx) => (
              <WishlistShowItem product={this.props.wishlistDetail.products[idx]} item={item} key={idx} />
            ))}
          </section>
        </div>
      );
    }
  }
}

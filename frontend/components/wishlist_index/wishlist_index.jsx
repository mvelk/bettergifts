import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { blue900 } from 'material-ui/styles/colors';
import WishlistIndexItem from './wishlist_index_item';

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

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  componentDidMount() {
    this.props.fetchAllMyWishlists();
    this.props.fetchAllFriendsWishlists();
    this.props.fetchAllUpcomingWishlists();
  }

  render() {

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="My Wishlists" value={0} style={styles.tab} />
          <Tab label="Friends' Wishlists" value={1} style={styles.tab} />
          <Tab label="Upcoming Events" value={2} style={styles.tab} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >

          <div>
            <section className="wishlist-index-heading content-wrapper">
              <div className="wishlist-index-heading-content">
                <Avatar size={70} src={this.props.currentUser.image_url} style={styles.avatar} />
                <hgroup>
                  <h2 style={styles.headline}>{this.props.currentUser.username}'s Wishlists'</h2>
                  <p>Wishlists: {this.props.myWishlists.length}</p>
                </hgroup>
              </div>
              <RaisedButton
                label="Create New Wishlist"
                secondary={true}
                onTouchTap={ () => alert("you clicked me") }
              />
            </section>
            <section className="wishlist-index-items content-wrapper">
              {this.props.myWishlists.map((myWishlist, idx) => (
                <WishlistIndexItem wishlist={myWishlist} key={idx} />
              ))}
            </section>
          </div>

          <div style={styles.slide}>
            <section className="wishlist-index-heading content-wrapper">
              <div className="wishlist-index-heading-content">
                <Avatar size={70} src={this.props.currentUser.image_url} style={styles.avatar} />
                <hgroup>
                  <h2 style={styles.headline}>Your Friends Wishlists</h2>
                  <p>Wishlists: {this.props.myWishlists.length}</p>
                </hgroup>
              </div>
              <button>Create New List</button>
            </section>
            <section className="wishlist-index-items content-wrapper">
              {this.props.myWishlists.map((myWishlist, idx) => (
                <WishlistIndexItem wishlist={myWishlist} key={idx} />
              ))}
            </section>
          </div>

          <div style={styles.slide}>
            <h2 style={styles.headline}>Upcoming Events</h2>
            <p>Wishlists: {this.props.upcomingWishlists.length}</p>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

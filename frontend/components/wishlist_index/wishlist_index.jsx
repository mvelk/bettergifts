import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { blue900 } from 'material-ui/styles/colors';
import WishlistIndexItem from './wishlist_index_item';
import WishlistForm from './wishlist_form';
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
  avatar: {
    marginRight: 40,
  },
};

class WishlistIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: parseInt(this.props.params['slideIndex']),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      slideIndex: parseInt(nextProps.params['slideIndex'])
    });
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

  myWishlists() {
    let greetingName = this.props.currentUser.first_name ? this.props.currentUser.first_name : this.props.currentUser.username;
    if (this.props.myWishlists.length > 0) {
      return (
        <section className="wishlist-index-items content-wrapper">
          {this.props.myWishlists.map((myWishlist, idx) => (
            <WishlistIndexItem type="mine" wishlist={myWishlist} key={idx} />
          ))}
        </section>
      );
    } else {
      return (
        <section className="wishlist-index-items content-wrapper">
          <div className="greeting">
            <h2 className="greeting-heading">Welcome to BetterGifts, {greetingName}!</h2>
            <p className="greeting-subheading">You haven't created any wishlists yet.</p>
              <RaisedButton
                label="Create New Wishlist"
                icon={<i className="material-icons md-light">add</i>}
                secondary={true}
                onTouchTap={ this.props.openWishlistFormModal }
              />
          </div>
        </section>
      );
    }
  }

  friendsWishlists() {
    if (this.props.friendsWishlists.length > 0) {
      return (
        <section className="wishlist-index-items content-wrapper">
          {this.props.friendsWishlists.map((friendsWishlist, idx) => (
            <WishlistIndexItem type="friends" wishlist={friendsWishlist} key={idx} />
          ))}
        </section>
      );
    } else {
      return (
        <section className="wishlist-index-items content-wrapper">
          <div className="greeting">
            <h2 className="greeting-heading">Let's get social!</h2>
            <p className="greeting-subheading">You haven't added any friends yet.</p>
            <p className="greeting-subheading">Don't worry -- we make it easy.</p>
            <RaisedButton
              label="Find Friends"
              icon={<i className="material-icons md-light">person_add</i>}
              secondary={true}
              onTouchTap={ () => alert("you clicked me") }
            />
          </div>
        </section>
      );
    }
  }

  upcomingWishlists() {
    if (this.props.upcomingWishlists.length > 0) {
      return (
        <section className="wishlist-index-items content-wrapper">
          {this.props.upcomingWishlists.map((friendsWishlist, idx) => (
            <WishlistIndexItem type="friends" wishlist={friendsWishlist} key={idx} />
          ))}
        </section>
      );
    } else {
      return (
        <section className="wishlist-index-items content-wrapper">
          <div className="greeting">
            <h2 className="greeting-heading">It's quiet. A little <i>too</i> quiet.</h2>
            <p className="greeting-subheading">Let's get this party started.</p>

              <RaisedButton
                label="Create New Wishlist"
                style={{marginRight: '20'}}
                icon={<i className="material-icons md-light">add</i>}
                primary={true}
                onTouchTap={ this.props.openWishlistFormModal }
                />

              <RaisedButton
                label="Find Friends"
                icon={<i className="material-icons md-light">person_add</i>}
                secondary={true}
                onTouchTap={ () => alert("you clicked me") }
              />

          </div>
        </section>
      );
    }
  }


  render() {

    return (
      <div>
        <WishlistForm currentUser={this.props.currentUser}
                      closeWishlistFormModal={this.props.closeWishlistFormModal}
                      wishlistModalOpen={this.props.wishlistModalOpen}
                      createNewWishlist={this.props.createNewWishlist}
                      />

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
            <div className="header-bar">
              <section className="wishlist-index-heading content-wrapper">
                <div className="wishlist-index-heading-content">
                  <Avatar size={70} src={this.props.currentUser.image_url} style={styles.avatar} />
                  <hgroup>
                    <h2 style={styles.headline}>{this.props.currentUser.username}&#8217;s Wishlists</h2>
                    <p>Wishlists: {this.props.myWishlists.length}</p>
                  </hgroup>
                </div>
                <div className="wishlist-index-actions">
                  <RaisedButton
                    label="Create New Wishlist"
                    icon={<i className="material-icons md-light">add</i>}
                    secondary={true}
                    onTouchTap={ this.props.openWishlistFormModal }
                  />
                </div>
              </section>
            </div>

            {this.myWishlists()}
          </div>

          <div>
            <div className="header-bar">
              <section className="wishlist-index-heading content-wrapper">
                <div className="wishlist-index-heading-content">
                  <hgroup>
                    <h2 style={styles.headline}>Your Friends&#8217; Wishlists</h2>
                    <p>Wishlists: {this.props.friendsWishlists.length}</p>
                  </hgroup>
                </div>
                <RaisedButton
                  label="Find Friends"
                  icon={<i className="material-icons md-light">person_add</i>}
                  secondary={true}
                  onTouchTap={ () => alert("you clicked me") }
                />
              </section>
            </div>
            {this.friendsWishlists()}

          </div>

          <div>
            <div className="header-bar">
              <section className="wishlist-index-heading content-wrapper">
                <div className="wishlist-index-heading-content">
                  <hgroup>
                    <h2 style={styles.headline}>Upcoming Events</h2>
                    <p>Wishlists: {this.props.upcomingWishlists.length}</p>
                  </hgroup>
                </div>
                <RaisedButton
                  label="Find Friends"
                  icon={<i className="material-icons md-light">person_add</i>}
                  secondary={true}
                  onTouchTap={ () => alert("you clicked me") }
                />
              </section>
            </div>
            {this.upcomingWishlists()}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default WishlistIndex;

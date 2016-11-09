import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import WishlistShowItem from './wishlist_show_item';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {

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
    if (this.props.wishlistDetail.id === undefined) {
      return (

          <div className="content-wrapper flex-centered">
            <CircularProgress size={200} thickness={5} />
          </div>

      );
    } else {
      return(
        <div>
          <div className="header-bar">
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
          </div>

          <section className="wishlist-index-items content-wrapper">
            {this.props.wishlistDetail.items.map((item, idx) => (
              <WishlistShowItem item={item} product={this.props.wishlistDetail.products[idx]} key={idx} />
            ))}
          </section>
        </div>
      );
    }
  }
}

export default WishlistShow;

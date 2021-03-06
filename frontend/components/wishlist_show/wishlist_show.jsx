import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import WishlistShowItem from './wishlist_show_item';
import CircularProgress from 'material-ui/CircularProgress';
import { hashHistory } from 'react-router';

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
    this.handleFindProducts = this.handleFindProducts.bind(this);
  }

  componentDidMount() {
    this.props.fetchWishlistDetail(this.props.params.wishlistId);
  }

  handleFindProducts() {
    hashHistory.push('/products');
  }


  wishlistShowButtons() {
    if (this.props.wishlistDetail.wisher.id === this.props.currentUser.id) {
      return (
        <div className="wishlist-show_actions">
          <RaisedButton
            label="Delete Wishlist"
            icon={<i className="material-icons md-light">delete</i>}
            primary={true}
            onTouchTap={ () => this.props.deleteWishlist(this.props.wishlistDetail.id) }
          />
          <RaisedButton
            label="Find More Products"
            icon={<i className="material-icons md-light">search</i>}
            secondary={true}
            onTouchTap={ this.handleFindProducts }
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

  wishlistDetailDisplay() {
    if (this.props.wishlistDetail.items.length > 0) {
      return (
        <section className="wishlist-show-items content-wrapper">
          {this.props.wishlistDetail.items.map((item, idx) => (
            <WishlistShowItem
              key={item.id}
              wisher={this.props.wishlistDetail.wisher}
              wishlistId={this.props.wishlistDetail.id}
              currentUser={this.props.currentUser}
              commitItemPurchase={this.props.commitItemPurchase}
              cancelItemPurchase={this.props.cancelItemPurchase}
              item={item}
              product={this.props.wishlistDetail.products[item.product_id]}
              deleteWishlistItem={this.props.deleteWishlistItem}
               />
          ))}
        </section>
      );
    } else {
      return (
        <section className="wishlist-index-items content-wrapper">
          <div className="greeting">
            <h2 className="greeting-heading">It's looking a little sparse in here.</h2>
            <p className="greeting-subheading">Search our database of more than <br/>200 million products for gifts you will love.</p>
            <RaisedButton
              label="Find More Products"
              icon={<i className="material-icons md-light">search</i>}
              secondary={true}
              onTouchTap={ this.handleFindProducts }
            />
          </div>
        </section>
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
            {this.wishlistShowButtons()}
          </section>
          </div>
          {this.wishlistDetailDisplay()}

        </div>
      );
    }
  }
}

export default WishlistShow;

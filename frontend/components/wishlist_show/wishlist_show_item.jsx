import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

class WishlistShowItem extends React.Component {
  // <div className="top-right" >
  //   <FontIcon className="material-icons" style={{ fontSize: 48, }} color='#fff'>favorite_border</FontIcon>
  // </div>
  constructor(props) {
    super(props);
    this.handleCommit = this.handleCommit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteWishlistItem(e.currentTarget.value);
  }

  handleCancel(e) {
    this.props.cancelItemPurchase(e.currentTarget.value);
  }

  handleCommit(e) {
    this.props.commitItemPurchase(this.props.currentUser.id, e.currentTarget.value);
  }

  purchaseButton() {

    if (this.props.currentUser.id !== this.props.wisher.id) {
      if (!this.props.item.purchaser_id) {
        return(
          <RaisedButton
            icon={<i className="material-icons md-light">add_shopping_cart</i>}
            label="Commit to purchase"
            fullWidth={false}
            primary={true}
            value={this.props.item.id}
            onTouchTap={this.handleCommit}
            />
        );
      } else if (this.props.item.purchaser_id === this.props.currentUser.id) {
        return(
          <RaisedButton
            icon={<i className="material-icons md-light">remove_shopping_cart</i>}
            label="Cancel purchase"
            fullWidth={false}
            value={this.props.item.id}
            secondary={true}
            onTouchTap={this.handleCancel}
            />
        );
      } else {
        // add other styling for disabled wishlist show item
        return(
          <RaisedButton
            icon={<i className="material-icons md-light">remove_shopping_cart</i>}
            label="Already purchased"
            fullWidth={false}
            disabled={true}
            />
        );
      }
    } else {
      return(
        <RaisedButton
          icon={<i className="material-icons">delete</i>}
          label="Remove item"
          fullWidth={false}
          value={this.props.item.id}
          onTouchTap={this.handleDelete}
          />
      );
    }

  }
  render() {
    return (
      <div className="wishlist-item-card-container">
        <Card>
          <CardMedia>
            <img src={this.props.product.large_image} />
          </CardMedia>
          <CardTitle
            titleStyle={{ fontSize: '22' }}
            style={{paddingTop: '10', paddingBottom: '0', textAlign: 'center'}}
            title={this.props.item.comment} />
          <CardText style={{paddingTop: '10', paddingBottom: '20', textAlign: 'center'}}>
            {this.props.product.title}&nbsp;
            <span style={{color: "#ff4081"}}>{this.props.product.price}</span>{this.props.item.id}
          </CardText>

          <CardActions style={{backgroundColor: "#0d47a1", padding: '20', textAlign: 'center'}}>
            {this.purchaseButton()}
          </CardActions>


        </Card>
      </div>
    );
  }
}

export default WishlistShowItem;

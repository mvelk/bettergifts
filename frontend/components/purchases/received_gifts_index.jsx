import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ReceivedGift from './received_gift';

class ReceivedGiftsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="wishlist-item-card-container">
        <Paper>
          <h2>{this.props.wishlist.wishlist_title}</h2>
          <h3>{this.props.wishlist.wishlist_date}</h3>
          <p>{"Gifts: " + this.props.wishlist.wishlist_items.length}</p>

          {this.props.wishlist.wishlist_items.map((gift) => (
            <ReceivedGift key={gift.id} gift={gift} />
          ))}
        </Paper>
      </div>
    );
  }
}

export default ReceivedGiftsIndex;

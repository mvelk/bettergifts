import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ReceivedGift extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="wishlist-item-card-container">
        <Card>
          <CardMedia>
            <img src={this.props.gift.product.large_image} />
          </CardMedia>
          <CardTitle
            titleStyle={{ fontSize: '22' }}
            style={{paddingTop: '10', paddingBottom: '0', textAlign: 'center'}}
            title={"From " + this.props.gift.purchaser.first_name + " " + this.props.gift.purchaser.last_name} />
          <CardText style={{paddingTop: '10', paddingBottom: '20', textAlign: 'center'}}>
            {this.props.gift.product.title}&nbsp;
            <span style={{color: "#ff4081"}}>{this.props.gift.product.price}</span>
          </CardText>

        </Card>
      </div>
    );
  }
}

export default ReceivedGift;

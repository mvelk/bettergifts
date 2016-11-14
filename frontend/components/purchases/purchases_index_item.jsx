import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class PurchasesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="wishlist-item-card-container">
        <Card>
          <CardMedia>
            <img src={this.props.purchase.product.large_image} />
          </CardMedia>
          <CardTitle
            titleStyle={{ fontSize: '22' }}
            style={{paddingTop: '10', paddingBottom: '0', textAlign: 'center'}}
            title={"For " + this.props.purchase.wishlist.title}
            subtitle={"Gifted to " + this.props.purchase.wisher.first_name + " " + this.props.purchase.wisher.last_name + " on " + this.props.purchase.wishlist.event_date}/>
          <CardText style={{paddingTop: '10', paddingBottom: '20', textAlign: 'center'}}>
            {this.props.purchase.product.title}&nbsp;
            <span style={{color: "#ff4081"}}>{this.props.purchase.product.price}</span>
          </CardText>

        </Card>
      </div>
    );
  }
}

export default PurchasesIndexItem;

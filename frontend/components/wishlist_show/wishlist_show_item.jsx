import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
const WishlistShowItem = (props) => {
  // <div className="top-right" >
  //   <FontIcon className="material-icons" style={{ fontSize: 48, }} color='#fff'>favorite_border</FontIcon>
  // </div>

  const style = {
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
  return (
    <Paper style={style} zDepth={3}>
      <img src={props.product.image_url} style={{ width: 250, }}/>
      {props.product.name}
    </Paper>
  );
};

export default WishlistShowItem;

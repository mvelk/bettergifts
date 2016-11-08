import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {hashHistory} from 'react-router';

export default ({wishlist, type}) => {
  const styles = {
    itemImage: {
      backgroundImage: 'url(' + wishlist.image_url + ')'
    },
  };

  const wisherDetails = () => {
    if (type === "mine") {
      return ('');
    } else {
      return (
        <div className="wisher-details">
          <p><Avatar size={30} src={wishlist.wisher_picture} /> {wishlist.wisher_name}</p>
        </div>
      );
    }
  };
  return (
    <div className='wishlist-index-item-container'>
      <div className="index-item-image" style={styles.itemImage} />
      <div className="index-item-card">
        <h3 className="index-item-card-title">{wishlist.title}</h3>

        {wisherDetails()}

        <p className="index-item-card-info">
          <i className="material-icons md-24 index-item-card-icon">people</i>
          {wishlist.num_purchasers} friends gifting
        </p>

        <p className="index-item-card-info">
          <i className="material-icons md-24 index-item-card-icon">event_note</i>
          {wishlist.event_date}
        </p>

        <div className="index-item-card-button-spacer">
          <RaisedButton
            label={`${wishlist.num_items} wishes`}
            primary={true}
            onTouchTap={ () => hashHistory.push(`/wishlist/${wishlist.id}`) }
            />
        </div>
      </div>
    </div>

  );
};

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
      <h3>{wishlist.title}</h3>

      {wisherDetails()}

      <p>
        <i className="material-icons">people</i>
        {wishlist.num_purchasers} friends gifting
      </p>



      <p>
        <i className="material-icons">event_note</i>
        {wishlist.event_date}
      </p>
      <RaisedButton
        label={`${wishlist.num_items} wishes`}
        primary={true}
        onTouchTap={ () => hashHistory.push(`/wishlist/${wishlist.id}`) }
      />
    </div>

  );
};

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default ({wishlist}) => {
  const styles = {
    itemContainer: {
      backgroundImage: 'url(' + wishlist.image_url + ')'
    },
  };
  return (
    <div className='wishlist-index-item-container'
         style={styles.itemContainer}>
      <h3>{wishlist.title}</h3>
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
        onTouchTap={ () => alert("you clicked me") }
      />
    </div>

  );
};

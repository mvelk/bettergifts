import React from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import PurchasesIndexItem from './purchases_index_item';
import CommittedPurchasesIndexItem from './committed_purchases_index_item';
import ReceivedGiftsIndex from './received_gifts_index';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { blue900 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

class PurchasesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  componentDidMount() {
    this.props.fetchPastPurchases(this.props.currentUser.id);
    this.props.fetchCommittedPurchases(this.props.currentUser.id);
    this.props.fetchReceivedGifts(this.props.currentUser.id);
  }

  render () {
    const styles = {
      tab: {
        backgroundColor: blue900
      },
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      avatar: {
        marginRight: 40,
      },
    };

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="My Wishlists" value={0} style={styles.tab} />
          <Tab label="Friends' Wishlists" value={1} style={styles.tab} />
          <Tab label="Upcoming Events" value={2} style={styles.tab} />
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >

          <div>
            <div className="header-bar">
              <section className="wishlist-index-heading content-wrapper">
                <div className="wishlist-index-heading-content">
                  <Avatar size={70} src={this.props.currentUser.image_url} style={styles.avatar} />
                  <hgroup>
                    <h2 style={styles.headline}>Committed Purchases</h2>
                    <p>Purchases: {this.props.committedPurchases.length}</p>
                  </hgroup>
                </div>
                <div className="wishlist-index-actions">

                </div>
              </section>
            </div>
            <section className="wishlist-index-items content-wrapper">
              {this.props.committedPurchases.map((purchase) => (
                <CommittedPurchasesIndexItem key={purchase.id} purchase={purchase} />
              ))}
            </section>
          </div>

          <div>
            <div className="header-bar">
              <section className="wishlist-index-heading content-wrapper">
                <div className="wishlist-index-heading-content">
                  <hgroup>
                    <h2 style={styles.headline}>Past Purchases</h2>
                    <p>Purchases: {this.props.pastPurchases.length}</p>
                  </hgroup>
                </div>

              </section>
            </div>
            <section className="wishlist-index-items content-wrapper">
              {this.props.pastPurchases.map((purchase) => (
                <PurchasesIndexItem key={purchase.id} purchase={purchase} />
              ))}
            </section>

          </div>

          <div>
            <div className="header-bar">
              <section className="wishlist-index-heading content-wrapper">
                <div className="wishlist-index-heading-content">
                  <hgroup>
                    <h2 style={styles.headline}>My Received Gifts</h2>
                    <p>Wishlists: {this.props.receivedGifts.length}</p>
                  </hgroup>
                </div>

              </section>
            </div>
            <section className="wishlist-index-items content-wrapper">
              {this.props.receivedGifts.map((wishlist) => (
                <ReceivedGiftsIndex key={wishlist.id} wishlist={wishlist} />
              ))}
            </section>
          </div>
        </SwipeableViews>

      </div>
    );
  }
}

export default PurchasesIndex;

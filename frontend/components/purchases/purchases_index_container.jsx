import { connect } from 'react-redux';
import {
  fetchPastPurchases,
  fetchCommittedPurchases,
  fetchReceivedGifts } from '../../actions/purchase_actions';
import PurchasesIndex from './purchases_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  pastPurchases: state.purchases.pastPurchases,
  committedPurchases: state.purchases.committedPurchases,
  receivedGifts: state.purchases.receivedGifts
});

const mapDispatchToProps = dispatch => ({
  fetchPastPurchases: (userId) => dispatch(fetchPastPurchases(userId)),
  fetchCommittedPurchases: (userId) => dispatch(fetchCommittedPurchases(userId)),
  fetchReceivedGifts: (userId) => dispatch(fetchReceivedGifts(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchasesIndex);

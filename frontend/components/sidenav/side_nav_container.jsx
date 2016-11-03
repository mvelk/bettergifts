import { connect } from 'react-redux';
import { closeSideDrawer, openSideDrawer } from '../../actions/modals_actions';
import SideNav from './side_nav';

const mapStateToProps = ({session, modals}) => ({
  currentUser: session.currentUser,
  sideDrawerOpen: modals.side
});

const mapDispatchToProps = dispatch => ({
  closeSideDrawer: () => dispatch(closeSideDrawer()),
  openSideDrawer: () => dispatch(openSideDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

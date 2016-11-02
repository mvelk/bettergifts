import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openAuthModal } from '../../actions/modals_actions';
import Nav from './nav';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openAuthModal: () => dispatch(openAuthModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

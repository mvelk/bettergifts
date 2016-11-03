import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { closeAuthModal } from '../../actions/modals_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session, modals }) => ({
  loggedIn: Boolean(session.currentUser.username),
  errors: session.errors,
  authModalOpen: modals.auth
});

const mapDispatchToProps = (dispatch, { location }) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  closeAuthModal: () => dispatch(closeAuthModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

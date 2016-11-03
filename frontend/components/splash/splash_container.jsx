import { connect } from 'react-redux';
import { openAuthModal } from '../../actions/modals_actions';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  openAuthModal: () => dispatch(openAuthModal()),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);

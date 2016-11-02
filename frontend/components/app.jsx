import React from 'react';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session/session_form_container';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    console.log(this.state);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({modalOpen: true});
  }
  handleClose() {
    this.setState({modalOpen: false});
  }

  render() {
    return (
      <div>
        <NavContainer handleOpen={this.handleOpen} />
        <SessionFormContainer handleClose={this.handleClose} modalOpen={this.state.modalOpen} />
        {this.props.children}
      </div>
    );
  }

}

export default App;

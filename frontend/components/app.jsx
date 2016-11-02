import React from 'react';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session/session_form_container';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavContainer />
        <SessionFormContainer />
        {this.props.children}
      </div>
    );
  }

}

export default App;

import React from 'react';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session/session_form_container';
import SideNavContainer from './sidenav/side_nav_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavContainer />
        <SideNavContainer />
        <SessionFormContainer />
        {this.props.children}
      </div>
    );
  }

}

export default App;

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Splash extends React.Component {
  render() {
    return (
      <div>

        <section className="hero-section">
          <div className="hero-section-content">
            <h2 className="hero-section-header" >Get them what they want,<br/>when they want it.</h2>
            <a className="ghost-button-semi-transparent" value="" onTouchTap={this.props.openAuthModal}>start gifting</a>
          </div>
        </section>

        <section className="splash-row">
          <div className="splash-section-content">
            <div className="splash-section-content-text left">
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <RaisedButton
                label="Let's do this"
                fullWidth={false}
                secondary={true}
                onTouchTap={this.props.openAuthModal}
                />
            </div>
            <div className="splash-section-content-image">
              <img src="http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_700/v1478119451/headphones_hd1gun.jpg" />
            </div>
          </div>
        </section>

        <section className="splash-row">
          <div className="splash-section-content">
            <div className="splash-section-content-image">
              <img src="http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_700/v1478119451/headphones_hd1gun.jpg" />
            </div>
            <div className="splash-section-content-text right">
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <RaisedButton
                label="Let's do this"
                fullWidth={false}
                secondary={true}
                onTouchTap={this.props.openAuthModal}
                />
            </div>
          </div>
        </section>

        <section className="splash-row">
          <div className="splash-section-content">
            <div className="splash-section-content-text left">
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <RaisedButton
                label="Let's do this"
                fullWidth={false}
                secondary={true}
                onTouchTap={this.props.openAuthModal}
                />
            </div>
            <div className="splash-section-content-image">
              <img src="http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_700/v1478119451/headphones_hd1gun.jpg" />
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Splash;

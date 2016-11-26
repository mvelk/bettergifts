import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {el1: false, el2: false, el3: false, el4: false, el5: false, el6: false};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let window_height = window.innerHeight;
    let window_top_position = window.scrollY;
    let window_bottom_position = (window_top_position + window_height);
    let newState = {};
    for (let i = 1; i <= 6; i++) {
      let ref = `el${i}`;
      if (this.refs[ref].getBoundingClientRect().top - window_height < -40) {
        newState[ref] = true;
      }
    }
    if (Object.keys(newState).length > 0) {
      this.setState(newState);
    }
  }

  render() {
    return (
      <div>

        <section className="hero-section">
          <div className="hero-section-content">
            <h2 className="hero-section-header" >Get them what they want,<br/>when they want it.</h2>
            <a className="ghost-button-semi-transparent"
               onTouchTap={this.props.openAuthModal}>
               start gifting
            </a>
          </div>
        </section>

        <section className="splash-row">
          <div className="splash-section-content">

            <h3>Get gifts that don’t suck.</h3>
            <ul className="splashy-copy">
              <li className={this.state.el1 === false ? "animate-me slide-left" : "animate-me slide-left visible"} ref="el1">
                <i className="material-icons yuge">loyalty</i>
                <p>Add Wishlists for upcoming special occasions like birthdays and holidays.</p>
              </li>
              <li className={this.state.el2 === false ? "animate-me slide-left" : "animate-me slide-left visible"} ref="el2">
                <i className="material-icons yuge">search</i>
                <p>Search from Amazon’s 200+ million products to find the gifts you really want.</p>
              </li>
              <li className={this.state.el3 === false ? "animate-me slide-left" : "animate-me slide-left visible"} ref="el3">
                <i className="material-icons yuge">people</i>
                <p>Connect with friends to share your wishlists with the people you care about.</p>
              </li>
            </ul>
            <RaisedButton
              label="Let's do this"
              fullWidth={false}
              primary={true}
              onTouchTap={this.props.openAuthModal}
              />
          </div>
        </section>

        <section className="splash-row">
          <div className="splash-section-content">
            <h3>Don’t be a disappointment. Buy smarter. No duplicates.</h3>
            <ul className="splashy-copy">
              <li className={this.state.el4 === false ? "animate-me slide-left" : "animate-me slide-left visible"} ref="el4">
                <i className="material-icons yuge">lightbulb_outline</i>
                <p>Discover what your friends and family really want.</p>
              </li>
              <li className={this.state.el5 === false ? "animate-me slide-left" : "animate-me slide-left visible"} ref="el5">
                <i className="material-icons yuge">playlist_add_check</i>
                <p>See what other friends and family are already planning to get them.</p>
              </li>
              <li className={this.state.el6 === false ? "animate-me slide-left" : "animate-me slide-left visible"} ref="el6">
                <i className="material-icons yuge">event_note</i>
                <p>Get reminders to ensure you never forget an important occasion.</p>
              </li>
            </ul>
          <RaisedButton
            label="Sign me up"
            fullWidth={false}
            secondary={true}
            onTouchTap={this.props.openAuthModal}
            />
        </div>
        </section>

      </div>
    );
  }
}

export default Splash;

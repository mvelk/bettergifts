import React from 'react';
import { Link, withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class WishlistForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      formType: 'create'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleFormType = this.handleToggleFormType.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const wishlist = this.state;
		this.state.formType === 'create' ? this.props.createNewWishlist({wishlist}) : console.log("eventually this will be edit action");
	}

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({formType: this.state.formType === 'create' ? 'edit' : 'create'});
  }

  render() {
    return (
      <div className="wishlist-form-container">
        <Dialog
          modal={false}
          actions={actions}
          open={this.props.authModalOpen}
          onRequestClose={this.props.closeAuthModal}
          contentStyle={customContentStyle}>

          <form onSubmit={this.handleSubmit} className="login-form-box">

            <h2 className="authform-header">{primaryActionText}</h2>

            <TextField
              value={this.state.username}
              onChange={this.update("username")}
              floatingLabelText="Username"
              fullWidth={true}
              errorText={this.props.errors.username === undefined ? "" : `username ${this.props.errors.username.join(", ")}`}
              />

            {this.emailTextField()}

            <TextField
              value={this.state.password}
              onChange={this.update("password")}
              type="password"
              floatingLabelText="Password"
              fullWidth={true}
              errorText={this.props.errors.password === undefined ? "" : this.props.errors.password.join(", ")}
              />

            <div className="authform-buttonwrapper">
              <RaisedButton
                type="submit"
                label={primaryActionText}
                fullWidth={true}
                primary={true}
                />
            </div>

            <div className="authform-buttonwrapper">
              <RaisedButton
                label="Use guest login"
                fullWidth={true}
                secondary={true}
                onTouchTap={ () => this.props.login( {user: { username: "demo-login", password: "password123"} } ) }
                />
            </div>


            <div className="authform-buttonwrapper">
              <h3 className="authform-subheader">{secondaryPrompt}</h3>
              <RaisedButton
                label={secondaryActionText}
                fullWidth={false}
                secondary={true}
                onTouchTap={this.handleToggleFormType}
                />
            </div>
          </form>
        </Dialog>
      </div>

    );
  }
}

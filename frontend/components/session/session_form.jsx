import React from 'react';
import { Link, withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class SessionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
      email: "",
			password: "",
      formType: 'login'
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
		const user = this.state;
		this.state.formType === 'login' ? this.props.login({user}) : this.props.signup({user});
	}

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({formType: this.state.formType === 'login' ? 'signup' : 'login'});
  }

  emailTextField() {
    if (this.state.formType !== "login") {
      return (
        <TextField
          value={this.state.email}
          onChange={this.update("email")}
          floatingLabelText="Email"
          fullWidth={true}
          errorText={this.props.errors.email === undefined ? "" : `email ${this.props.errors.email.join(", ")}`}
        />
      );
    }
  }

	render() {
    const style = {
       margin: 12,
    };
    let primaryActionText;
    let secondaryActionText;
    let secondaryPrompt;

    if (this.state.formType === "login") {
      primaryActionText = "Log in";
      secondaryPrompt = "Don't have an account?";
      secondaryActionText = "Sign up";
    } else {
      primaryActionText = "Sign up";
      secondaryPrompt = "Already have an account?";
      secondaryActionText = "Log in";
    }

    const actions = [];
    const customContentStyle = {
      width: '25%',
			minWidth: '360'
    };

		return (
			<div className="login-form-container">
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

export default withRouter(SessionForm);

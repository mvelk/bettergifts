import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';

class WishlistForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      title: '',
      event_date: new Date(),
      wisher_id: this.props.currentUser.id,
      description: '',
      image_url: '',
      formType: 'create'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleFormType = this.handleToggleFormType.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.formType === 'create') {
			let wishlist = {
				title: this.state.title,
				event_date: this.state.event_date,
				wisher_id: this.state.wisher_id,
				description: this.state.description,
				image_url: this.state.image_url
			};
			this.props.createNewWishlist(wishlist);
		}

	}

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({formType: this.state.formType === 'create' ? 'edit' : 'create'});
  }

  handleChange(e, date) {
    this.setState({
      event_date: date,
    });
  }

  render() {
    const actions = [];
    const customContentStyle = {
      width: '50%',
      minWidth: '400'
    };
    let actionText;

    if (this.state.formType === "create") {
      actionText = "Create wishlist";
    } else {
      actionText = "Edit wishlist";
    }

    return (
      <div className="wishlist-form-container">
        <Dialog
          modal={false}
          actions={actions}
          open={this.props.wishlistModalOpen}
          onRequestClose={this.props.closeWishlistFormModal}
          contentStyle={customContentStyle}>

          <form onSubmit={this.handleSubmit} className="wishlist-form-box">

            <h2 className="form-header">{actionText}</h2>

            <TextField
              value={this.state.title}
              onChange={this.update("title")}
              floatingLabelText="Title"
              fullWidth={true}  />

            <DatePicker
              floatingLabelText="When should gifts arrive?"
              DateTimeFormat={Intl.DateTimeFormat}
              locale="en-AU" formatDate={new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', }).format}
              value={this.state.event_date}
              onChange={this.handleChange}
              fullWidth={true}
              autoOk={true} />

            <TextField
              floatingLabelText="In a few words, what is the occasion"
              value={this.state.description}
              onChange={this.update("description")}
              fullWidth={true} />

            <TextField
              floatingLabelText="Add an image link (optional)"
              value={this.state.image_url}
              onChange={this.update("image_url")}
              fullWidth={true} />

            <div className="buttonwrapper">
              <RaisedButton
                type="submit"
                label={actionText}
                fullWidth={true}
                primary={true}
                />
            </div>

          </form>
        </Dialog>
      </div>

    );
  }
}

export default WishlistForm;

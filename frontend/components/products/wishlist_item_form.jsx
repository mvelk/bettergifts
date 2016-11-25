import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class WishlistItemForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			wishlist: {},
			wishlistIdx: null,
      comment: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleChange(e, index, value) {
		this.setState({wishlistIdx: value, wishlist: this.props.myWishlists[value]});
	}

	handleClose(e) {
		this.props.closeWishlistItemFormModal();
		this.setState({
			wishlist: {},
			wishlistIdx: null,
			comment: ""
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addProductToDB(
			this.props.product,
			{
				comment: this.state.comment,
				wishlist_id: this.state.wishlist.id
			}
		);
	}

	render() {
    const style = {
       margin: 12,
    };

    const actions = [];
    const customContentStyle = {
      width: '60%',
			minWidth: '600'
    };
		if (this.props.product) {
			const menuItems = this.props.myWishlists.map((wishlist, idx) => (
				<MenuItem value={idx} primaryText={`${wishlist.title} (${wishlist.event_date})`} />
			));
		return (
			<div className="login-form-container">
        <Dialog
                modal={false}
                actions={actions}
                open={this.props.wishlistItemModalOpen}
								autoScrollBodyContent={true}
                onRequestClose={this.handleClose}
                contentStyle={customContentStyle}>

          <form onSubmit={this.handleSubmit} className="wishlist-form-box">
						<div className="wishlist-item-header">
            <h2 className="form-header">Create New Wishlist Item</h2>
							<h3 className="wishlist-item-title">{this.props.product.itemAttributes.title} &nbsp;
							<span className="price">{this.props.product.itemAttributes.price.FormattedPrice}</span></h3>
						</div>
						<div className="wishlist-item-form-flexer">

							<div className="wishlist-item-image">
								<img src={this.props.product.largeImage['URL']} className="form-product-image" />
							</div>
							<div className="wishlist-item-form-fields">

								<SelectField
				          floatingLabelText="Wishlists"
				          value={this.state.wishlistIdx}
				          onChange={this.handleChange}
									fullWidth={true}
				        >
									{menuItems}
			        	</SelectField>
	  						<TextField
	                value={this.state.comment}
	  							onChange={this.update("comment")}
	                floatingLabelText="Comment"
	                fullWidth={true}
	              />
							<div className="wishlist-item-buttonwrapper">
		              <RaisedButton
		                type="submit"
		                label="Add Item to Wishlist"
		                fullWidth={true}
		                primary={true}
		              />
		            </div>
							</div>
						</div>

          </form>
        </Dialog>

			</div>
		);} else {
			return(<div></div>);
		}
	}

}

export default (WishlistItemForm);

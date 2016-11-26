import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import WishlistItemForm from './wishlist_item_form';


class ProductGallery extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			keywords: "",
      product: null,
      searching: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleClick(product) {
    return e => {
      this.setState({ product });
      this.props.openWishlistItemFormModal();
    };
  }

  componentDidMount() {
    this.props.fetchAllMyWishlists();
  }

  handleSubmit(e) {
		e.preventDefault();
    //TODO: Add minPrice, maxPrice and category to search call.
		this.props.searchProductsByKeyword(this.state.keywords, 1);
	}

  render() {
    const styles = {
      raisedButton: {
        marginTop: 20,
        marginBottom: 10,
      }
    };
    let title;
    let products;
    if (this.props.searchResults.length > 0) {
      products = this.props.searchResults;
      title = "Search Results";
    } else {
      products = this.props.recommendedProducts;
      title = "Recommended for You";
    }
    const items = products.map((product, idx) => {
      if (!product.largeImage) {
        return '';
      } else if (!product.itemAttributes.price) {
        return '';
      }
      return (
      <figure key={idx}>
      <img src={product.largeImage['URL']} />
      <figcaption>
        {product.itemAttributes.title} &nbsp;
        <span className="price">{product.itemAttributes.price}</span>
      </figcaption>

        <RaisedButton
            icon={<i className="material-icons md-24 md-light">add_shopping_cart</i>}
            label="Add to Wish List"
            fullWidth={true}
            primary={true}
            style={styles.raisedButton}
            onTouchTap={this.handleClick(product)}
          />
      </figure>);
    });

    return (

      <div className="content-wrapper">
        <form onSubmit={this.handleSubmit} className="search-form-box">
          <IconButton
            tooltip="Search"
            type="submit">
            <i className="material-icons" style={{ color: 'grey' }}>search</i>
          </IconButton>
          <TextField
            value={this.state.keywords}
            onChange={this.update("keywords")}
            hintText="Search by keyword"
            fullWidth={true}/>
        </form>

        <WishlistItemForm
          product={this.state.product}
          myWishlists={this.props.myWishlists}
          closeWishlistItemFormModal={this.props.closeWishlistItemFormModal}
          wishlistItemModalOpen={this.props.wishlistItemModalOpen}
          addProductToDB={this.props.addProductToDB} />

        <div >
          <h2 className="search-results-title">{title}</h2>
          <div id="columns" className="columns_num">
            <ReactCSSTransitionGroup
              transitionName="carousel"
               transitionEnterTimeout={300}
               transitionLeaveTimeout={300}>
              {items}
             </ReactCSSTransitionGroup>
          </div>
        </div>

      </div>

    );
  }
}

export default ProductGallery;

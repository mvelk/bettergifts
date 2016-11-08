import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProductGallery extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			keywords: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.searchProductsByKeyword(this.state.keywords);
	}

  render() {
    const styles = {
      raisedButton: {
        marginTop: 20,
        marginBottom: 10,
      }
    };
    const items = this.props.products.map((product, idx) => {
      if (!product.largeImage) { return ''; }
      return (
      <figure key={idx}>
      <img src={product.largeImage['URL']} />
      <figcaption>{product.itemAttributes.title}</figcaption>
        <span className="price"></span>
        <RaisedButton
            label="Add to Wish List"
            fullWidth={true}
            primary={true}
            style={styles.raisedButton}
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

        <div id="columns" className="columns_4">
          <ReactCSSTransitionGroup
            transitionName="carousel"
             transitionEnterTimeout={300}
             transitionLeaveTimeout={300}>
            {items}
           </ReactCSSTransitionGroup>
        </div>

      </div>

    );
  }
}

export default ProductGallery;

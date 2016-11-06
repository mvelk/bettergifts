import React from 'react';
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

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

  generateItemCards() {
    return(
    this.props.products.map((product, idx) => {
      if (product.largeImage['URL']) {
        console.log(product.largeImage['URL']);
        return(<li key={idx}><img src={product.largeImage['URL']} width='200px' /></li>);
      }
    }));
  }

  render() {
    const Grid = makeResponsive(measureItems(CSSGrid), {
      maxWidth: 1920,
      minPadding: 100,
      measureImages: true

    });
    return (

      <div className="content-wrapper">
        <form onSubmit={this.handleSubmit} className="search-form-box">

          <TextField
            value={this.state.keywords}
            onChange={this.update("keywords")}
            hintText="Search by keyword"
            fullWidth={true}/>
          <IconButton
            tooltip="Search"
            type="submit">
            <i className="material-icons" style={{ color: 'grey' }}>search</i>
          </IconButton>

        </form>

        <Grid
          component="ul"
          columns={5}
          columnWidth={200}
          gutterWidth={5}
          gutterHeight={5}
          springConfig={{ stiffness: 170, damping: 26 }}
          duration={800}
          easing="ease-out"
        >

        {this.generateItemCards()}

        </Grid>

      </div>

    );
  }
}

export default ProductGallery;

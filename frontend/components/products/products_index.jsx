import React from 'react';
import { SpringGrid } from 'react-stonecutter';
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

  render() {
    console.log(this.props.products);
    return (

      <div>
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

        <SpringGrid
          component="ul"
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
          itemHeight={200}
          springConfig={{ stiffness: 170, damping: 26 }}
        >

        {this.props.products.map((product, idx) => (
          <li key={idx}><img src={product.largeImage} height="250px" /></li>
        ))}

        </SpringGrid>

      </div>

    );
  }
}

export default ProductGallery;

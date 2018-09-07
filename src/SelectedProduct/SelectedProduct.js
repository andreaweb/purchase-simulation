import React, { Component } from 'react';
import Checkout from './Checkout/Checkout.js'
import '../App.css';

class SelectedProduct extends Component {
  render(){
    return (

      <div className="selected-product">
        <img src={this.props.product.image} className="product-image" alt="Product" />

        
          <Checkout {...this.props} />
      </div>
    )
  }
}
export default SelectedProduct;
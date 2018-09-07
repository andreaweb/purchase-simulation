import React, { Component } from 'react';
import '../App.css';

class SelectedProduct extends Component {
  render(){
    return (

      <div className="selected-product">
        <img src={this.props.product.image} className="product-image" alt="Product" />

        <div className="checkout">
          <div className="coupons">
            <h5 className="checkout__title">cupons</h5>

            <div className="coupon__item">
              <input 
                id="none" 
                name="cupom" 
                className="radio"
                onChange={() => this.props.couponSelect("none")} 
                checked={this.props.selectedCoupon === "none"} 
                type="radio"
              />
              <label className="coupon__label" htmlFor="none">
                <span className="coupon__title">não usar cupom</span>
              </label>
            </div>

            { this.props.checkout.availableCoupons 
              ? this.props.checkout.availableCoupons.map((coupon) =>
                <div className="coupon__item" key={coupon.id}>
                  <input 
                    type="radio"
                    className="radio" 
                    onChange={() => this.props.couponSelect(coupon.id, coupon.discount)} 
                    checked={this.props.selectedCoupon === coupon.id} 
                    name="cupom" 
                    id={coupon.id} 
                  />
                  <label htmlFor={coupon.id} className="coupon__label">
                    <span className="coupon__title">
                      {coupon.title} 
                    </span>
                    <span className="coupon__discount">- R$ {coupon.discount},00</span>
                  </label>
                </div>
                )
              : null
            }
            
          </div>
          <div className="summary">
            <h5 className="checkout__title">resumo</h5>
            <p className="summary__item">
              <span>valor original</span>
              <span>R$ {this.props.product.price},00</span>
            </p>
            <p className="summary__item">
              <span>cupom</span>
              <span className="red">-R$ {this.props.selectedDiscount},00</span>
            </p>
            <p className="summary__item">
              <span>frete</span>
              <span>R$ {this.props.checkout.shippingPrice},00</span>
            </p>
            <p className="summary__item">
              <span>total</span>
              <span className="bold">R$ {  this.props.checkout.totalPrice},00</span>
            </p>
          </div>
          <div className="buttons">
            <button className="button button--cancel" onClick={this.props.cancelPurchase}>cancelar</button>
            <button  className="button button--confirm" onClick={this.props.sendPurchase}>confirmar</button>
          </div>
        </div>
      </div>
    )
  }
}
export default SelectedProduct;
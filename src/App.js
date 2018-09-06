import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    product: '',
    checkout: '',
    selectedCoupon: 'none',
    selectedDiscount: 0
  }
  componentDidMount(){
    //GET
    fetch(`${process.env.REACT_APP_API_URL}/api/checkouts/1321`)
    .then(
      (res) => {
        return res.json()
      }
    )
    .then((data) => this.setState({product: data.product, checkout: data.checkout}))
    .catch((error) => console.log(error))
  }
  couponSelect(id, discount = 0){
    if(id !== this.state.selectedCoupon){

      const updateCheckout = {...this.state.checkout};
      updateCheckout.totalPrice = 
        this.state.product.price + this.state.checkout.shippingPrice - discount;

      this.setState({selectedCoupon: id, selectedDiscount: discount, checkout: updateCheckout})
    }
  }
  sendPurchase = () => {
    const data = this.state;
    (async () => {
      const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/checkouts/1321`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const content = await rawResponse;
    
      console.log(content);
    })();
  }
  render() {
    return (
      <div className="App">
        <header className="header">
         <img src="./images/logo.png" className="logo" alt="logo" />
        </header>
        <div className="selected-product">
          <img src={this.state.product.image} className="product-image" alt="Product" />

          <div className="checkout">
            <div className="coupons">
              <h5 className="checkout__title">cupons</h5>

              <div className="coupon__item">
                <input 
                  id="none" 
                  name="cupom" 
                  className="radio"
                  onChange={() => this.couponSelect("none")} 
                  checked={this.state.selectedCoupon === "none"} 
                  type="radio"
                />
                <label className="coupon__label" htmlFor="none">não usar cupom</label>
              </div>

              { this.state.checkout.availableCoupons 
                ? this.state.checkout.availableCoupons.map((coupon) =>
                  <div className="coupon__item" key={coupon.id}>
                    <input 
                      type="radio"
                      className="radio" 
                      onChange={() => this.couponSelect(coupon.id, coupon.discount)} 
                      checked={this.state.selectedCoupon === coupon.id} 
                      name="cupom" 
                      id={coupon.id} 
                    />
                    <label htmlFor={coupon.id} className="coupon__label">
                      <span>
                        {coupon.title} 
                      </span>
                      <span className="red">- R$ {coupon.discount},00</span>
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
                <span>R$ {this.state.product.price},00</span>
              </p>
              <p className="summary__item">
                <span>cupom</span>
                <span className="red">-R$ {this.state.selectedDiscount},00</span>
              </p>
              <p className="summary__item">
                <span>frete</span>
                <span>R$ {this.state.checkout.shippingPrice},00</span>
              </p>
              <p className="summary__item">
                <span>total</span>
                <span className="bold">R$ {  this.state.checkout.totalPrice},00</span>
              </p>
            </div>
            <div className="buttons">
              <button className="buttons button--cancel">cancelar</button>
              <button  className="button button--confirm" onClick={this.sendPurchase}>confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

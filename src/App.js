import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    product: '',
    checkout: '',
    selectedDiscount: 0
  }
  componentDidMount(){
    //GET
    fetch(`${process.env.REACT_APP_API_URL}/api/checkouts/1321`)
    .then(
      //(res) => { console.log(res); return res.json}
      (res) => {
        return res.json()
      }
    )
    .then((data) => this.setState({product: data.product, checkout: data.checkout}))
    .catch((error) => console.log(error))

    //POST
    // (async () => {
    //   const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/checkouts/1321`, {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   const content = await rawResponse.status;
    // 
    //   console.log(content);
    // })();
  }

  render() {
    return (
      <div className="App">
        <header className="header">
         <img src="./images/logo.png" className="logo" alt="logo" />
        </header>
        <div className="selected-product">
          <img src={this.state.product.image} alt="Product" />

          <div className="checkout">
            <div className="coupons">
              <h5>cupons</h5>

              <div className="coupon-item">
                <input type="radio" />
                <label>não usar cupom</label>
              </div>

              { this.state.checkout.availableCoupons 
                ? this.state.checkout.availableCoupons.map((coupon, key) =>
                  <div className="coupon-item">
                    <input type="radio" />
                    <label>
                      black friday 
                      <span>- R$ {coupon.discount},00</span>
                    </label>
                  </div>
                  )
                : null
              }
              
            </div>
            <div className="summary">
              <h5>resumo</h5>
              <p>
                <span>valor original</span>
                <span>R$ {this.state.product.price},00</span>
              </p>
              <p>
                <span>cupom</span>
                <span>-R$ {this.state.selectedDiscount},00</span>
              </p>
              <p>
                <span>frete</span>
                <span>R$ {this.state.checkout.shippingPrice},00</span>
              </p>
              <p>
                <span>total</span>
                <span>R$ {this.state.checkout.totalPrice},00</span>
              </p>
            </div>
            <div className="buttons">
              <button>cancelar</button>
              <button>confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

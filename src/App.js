import React, { Component } from 'react';
import Header from './Header/Header.js';
import SelectedProduct from './SelectedProduct/SelectedProduct.js';
import Modal from './Modal/Modal.js';
import './App.css';

class App extends Component {
  state = {
    product: '',
    checkout: '',
    selectedCoupon: 'none',
    selectedDiscount: 0,
    isModalOpen: false,
    modalType: null
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

      this.setState({
          selectedCoupon: id, 
          selectedDiscount: discount, 
          checkout: updateCheckout
        })
    }
  }
  cancelPurchase = () => {
    this.openModal("cancel")
  }
  sendPurchase = () => {
    const checkout = this.state.checkout;
    (async () => {
      const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/checkouts/1321`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkout)
      })
      const status = await rawResponse.ok;
      
      if(status){
        this.openModal("confirm")
      }else{
        this.openModal("error")
      }
      //console.log("Sent to server:",JSON.stringify(checkout));
    })();
  }
  openModal = (modalType) => {
    this.setState({isModalOpen: true, modalType: modalType})
  }
  closeModal = () => {
     this.setState({isModalOpen: false, modalType: null})
  }
  render() {
    return (
      <div className={ this.state.isModalOpen ? "App App--modal-open" : "App" }>
        <Header />

        <SelectedProduct 
          product={this.state.product} 
          checkout={this.state.checkout} 
          selectedCoupon={this.state.selectedCoupon}
          selectedDiscount={this.state.selectedDiscount}
          couponSelect={(id, discount) => this.couponSelect(id, discount)}
          cancelPurchase={this.cancelPurchase}
          sendPurchase={this.sendPurchase}
        />

        <Modal 
          open={this.state.isModalOpen} 
          close={this.closeModal} 
          type={this.state.modalType} 
        />
      </div>
    );
  }
}

export default App;

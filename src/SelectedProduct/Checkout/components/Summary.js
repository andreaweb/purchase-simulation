import React from 'react';
import '../../../App.css';

const Summary = (props) =>
    	<div className="summary">
	        <h5 className="checkout__title">resumo</h5>
	        <p className="summary__item">
	          <span>valor original</span>
	          <span>R$ {props.product.price},00</span>
	        </p>
	        <p className="summary__item">
	          <span>cupom</span>
	          <span className="red">-R$ {props.selectedDiscount},00</span>
	        </p>
	        <p className="summary__item">
	          <span>frete</span>
	          <span>R$ {props.checkout.shippingPrice},00</span>
	        </p>
	        <p className="summary__item">
	          <span>total</span>
	          <span className="bold">R$ {props.checkout.totalPrice},00</span>
	        </p>
	    </div>
export default Summary
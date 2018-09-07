import React from 'react';
import Buttons from './components/Buttons.js'
import Coupons from './components/Coupons.js'
import Summary from './components/Summary.js'
import '../../App.css';

const Checkout = (props) =>
	    	<div className="checkout">
	    		<Coupons {...props} />
	          	<Summary {...props} />
	          	<Buttons {...props} />
	        </div>

export default Checkout
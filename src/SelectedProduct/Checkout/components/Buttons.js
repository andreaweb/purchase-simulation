import React from 'react';
import '../../../App.css';

const Buttons = (props) =>
		<div className="buttons">
			<button className="button button--cancel" onClick={props.cancelPurchase}>
				cancelar
			</button>
			<button  className="button button--confirm" onClick={props.sendPurchase}>
				confirmar
			</button>
		</div>
export default Buttons
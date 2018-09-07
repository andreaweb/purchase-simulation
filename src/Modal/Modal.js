import React, { Component } from 'react';
import '../App.css';

class Modal extends Component{
	render(){
		return (
			<div 
	          className={ this.props.open ? "modal" : "display-none"} 
	          modaltype={ this.props.type }
	          onClick={ this.props.close }
	        >
	          <section className="modal__content">
	            <img 
	              src={ this.props.type === "confirm" 
	                    ? "./images/cart.png" 
	                    : "./images/orange-cart.png"
	                  }
	              alt=""
	              className="modal__image" 
	            />
	            <h4 className="modal__title">
	              compra 
	              	{ 
	              		this.props.type === "confirm" 
	                    ? " confirmada" 
	                    : null
	                }
	                { 
	              		this.props.type === "cancel" 
	                    ? " cancelada" 
	                    : null
	                }
	                { 
	              		this.props.type === "error" 
	                    ? " não concluída" 
	                    : null
	                }
	            </h4>
	            <p className="modal__description">
	            	{ 
	              		this.props.type === "confirm" 
	                    ? "enviaremos atualizações sobre o pedido para o seu email" 
	                    : null
	                }
	                { 
	              		this.props.type === "cancel" 
	                    ? "o pedido não foi enviado e você não será cobrado" 
	                    : null
	                }
	                { 
	              		this.props.type === "error" 
	                    ? "um erro ocorreu. confira sua conexão de internet ou tente mais tarde" 
	                    : null
	                } 
	            </p>
	          </section>
	        </div>
		)
	}
}

export default Modal
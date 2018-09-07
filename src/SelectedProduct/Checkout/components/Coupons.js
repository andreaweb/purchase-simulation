import React from 'react';
import '../../../App.css';

const Coupons = (props) =>
      <div className="coupons">
        <h5 className="checkout__title">cupons</h5>

        <div className="coupon__item">
          <input 
            id="none" 
            name="cupom" 
            className="radio"
            onChange={() => props.couponSelect("none")} 
            checked={props.selectedCoupon === "none"} 
            type="radio"
          />
          <label className="coupon__label" htmlFor="none">
            <span className="coupon__title">não usar cupom</span>
          </label>
        </div>

        { props.checkout.availableCoupons 
          ? props.checkout.availableCoupons.map((coupon) =>
            <div className="coupon__item" key={coupon.id}>
              <input 
                type="radio"
                className="radio" 
                onChange={() => props.couponSelect(coupon.id, coupon.discount)} 
                checked={props.selectedCoupon === coupon.id} 
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
export default Coupons
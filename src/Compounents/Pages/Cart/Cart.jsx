import React, { useContext } from 'react';
import { StoreContext } from '../../../Context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate=useNavigate();
  return (
    <div className='Cart mx-auto w-[90%] pb-[70px] ' >
      <div className='Cart-Items'>
        <div className="Cart-Items-Tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="main" key={item._id}>
                <div className="cart-items-tittle cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className='font-bold text-3xl'>Cart Total</h2>
          <div className="cart-Total-tetails-all">
            <div className="cart-Total-tetails">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-Total-tetails">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-Total-tetails">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-Promo-code">
          <div>
            <p>If you have a promo code, enter it here!</p>
            <div className='Cart-Promo-Input'>
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

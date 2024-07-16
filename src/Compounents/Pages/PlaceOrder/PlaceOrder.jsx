import React, { useContext } from 'react'
import { StoreContext } from '../../../Context/StoreContext'
import "./PlaceOrder.css"
const PlaceOrder = () => {

  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className=' w-[90%] mx-auto pb-[70px]' >
      <form className="Place-Order">
       <div className="place-orderleft">

        <p className='title'>Delivery Information</p>
        <div className="Multifileds">
          <input type="text"  placeholder="first Name"/>
          <input type="text"  placeholder="Last Name"/>
        </div>

<input type="email" placeholder="Email Adderss" />
<input type="text" placeholder="Street"  />

<div className="Multifileds">
          <input type="text"  placeholder="City "/>
          <input type="text"  placeholder="State"/>
        </div>
        <div className="Multifileds">
          <input type="text"  placeholder="Zip Coad"/>
          <input type="text"  placeholder="Country"/>
        </div>
        <input type="text" placeholder="Phone" />
       </div>
       <div className="Place-orderright">
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
          <button >PROCEED TO PAYMENT</button>
        </div>




       </div>
      </form>
    </div>
  )
}

export default PlaceOrder

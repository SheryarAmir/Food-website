import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../Assest/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id , name ,price , description , image}) => {


const {cartItems , addToCart, removeFromCart }=useContext(StoreContext);

  return (
    <div className=' FoodItem'>
      <div className="Food-Item-Container">
        <img className='food-item-img' src={image} alt="" />

        {
          !cartItems[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />  : <div className='Food-item-Counter'> <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
           </div> 
       
        }
      </div>
      <div className="Food-Item-Info">
        <div className="Food-Item-Rating">
            <p>{name}</p>
            <img  src={assets.rating_starts} alt="" />
        </div>

        <p className='Food-Item-Desc'> {description}</p>
        <p className='Food-Item-price'>  $ {price}</p>
      </div>
    </div>
  )
}

export default FoodItem

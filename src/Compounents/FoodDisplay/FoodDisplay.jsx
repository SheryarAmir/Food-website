import React, { useContext } from 'react'
 import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = () => {

  const {food_list}=useContext(StoreContext)
  return (
    <div className='Food-Display  w-[89%] mx-auto  mt-10' id='Food-Display'>
      <h2 className='font-medium text-3xl '>
        Top Disher near you 
      </h2>

<div className="food-Disply-List ">
  {
    food_list.map((item , index )=>{

    // if()  {

    //   }
return (
  <FoodItem key= {index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
)
    })
  }
</div>

    </div>
  )
}

export default FoodDisplay

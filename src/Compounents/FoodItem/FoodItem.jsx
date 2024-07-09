import React, { useState } from 'react';
import { food_list } from '../../../Assest/assets';


function FoodItem() {

    const [count , setCout]= useState(0)
  return (
    <>
    <div className="main w-[89%] mx-auto">
      <hr  className='h-4 my-8 text-[#747474]'/>
      
      
      <h2  className=' font-bold text-3xl my-5 '>Top Dishes near you</h2>
      <div className='main grid grid-cols-4 gap-4  '>
        {food_list.map((item, index) => (
          <div key={index} className="menuItem cursor-pointer transition-transform transform hover:scale-105 p-4 shadow-neutral-500 shadow-2xl rounded-t-full ">
            <img
              src={item.image}
              alt={item.name}
              className='foodImage w-full h-[180px] object-cover rounded'
            />
            <div className='mt-3 text-xl flex justify-between '>
             {item.name} 
            <img className='h-5 mt-1' src={item.rating} alt="" />
            </div>
           
           
            <div className='mt-3 text-md text-[#747474] '>
              {item.description}
            </div>
            <div className='mt-3 text-xl text-[tomato] '>
              ${item.price}

             
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default FoodItem;

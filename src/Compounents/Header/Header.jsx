import React from 'react'
import "./Header.css"
import { assets } from "../../Assest/assets"
function Header() {
  return (

    <>
    <div
  className="header"
  style={{
    backgroundImage: `url(${assets.pic4})`,
  }}
>

<div className="headercontant sm:absolute flex flex-col items-start gap-3  md:w-[50%] md:left-[6vw] md:bottom-[26%]  sm:w-[60%] sm:left-[3vw] sm:bottom-[20%]  w-[100%]  ">
    <h2 className='font-bold 2xl:text-7xl text-white  sm:text-4xl  xl:text-5xl ml-10  mt-10 sm:ml-0 sm:mt-0'>Order you favourite food here</h2>
    <p className='font-small md:text-2xl text-white hidden lg:block'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias facere distinctio nostrum harum eos numquam maiores quibusdam ullam reiciendis, perspiciatis, fugiat, perferendis optio corrupti.</p>

    <button className=' text-[#747474] border font-semiblod lg:py-4 lg:px-6 sm:mt-5 mb-2 sm:mb-0  md:text-xl rounded-full bg-white sm:py-2 sm:px-2  p-1 ml-10   sm:ml-0  text-sm'> View Menu</button>
</div>


      
    </div>
    </>
  )
}

export default Header;

import React from 'react'

function Header() {
  return (

    <>
    <div className='header'   style={{
          backgroundImage: "url('./Assest/pic4.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height:'40vw',
          margin: "30px auto",
          position: "relative",
          backgroundRepeat:"no-repeat"



        }}>

<div className="header-contant absolute flex flex-col items-start gap-3  w-[50%] left-[18vw] bottom-[20%] text-white">
    <h2 className='font-bold text-3xl'>Order you favourite food here</h2>
    <p className='font-medium text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias facere distinctio nostrum harum eos numquam maiores quibusdam ullam reiciendis, perspiciatis, fugiat, perferendis optio corrupti.</p>

    <button>View Menu</button>
</div>


      
    </div>
    </>
  )
}

export default Header

import { useState } from 'react'
import Navbar  from './Compounents/Navbar'
// import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter ,  RouterProvider  } from 'react-router-dom'

// import  {link} from 'react-router-dom'

import {Home} from './Compounents/Pages/Home/Home'
import { Cart} from './Compounents/Pages/Cart/Cart'
import { PlaceOrder} from './Compounents/Pages/PlaceOrder/PlaceOrder'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    { path:'/' , 
      element:<Home/>},

    {path: '/ Cart',
       element:<Cart/>},

       {
        path : '/Order'
        , element:<PlaceOrder/>
       }


  ])

  return (
    <>
      <div className="app">
        <Navbar/>

        <RouterProvider router={router} />



       </div>
    </>
  )
}

export default App;

import { useState } from 'react'
import Navbar  from './Compounents/Navbar'
// import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter ,  RouterProvider  } from 'react-router-dom'
import "./App.css"
// import  {link} from 'react-router-dom'

import {Home} from './Compounents/Pages/Home/Home'
import { Cart} from './Compounents/Pages/Cart/Cart'
import { PlaceOrder} from './Compounents/Pages/PlaceOrder/PlaceOrder'

function App() {
  const [theme, setTheme] = useState("light")

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
      <div className={`app  ${theme}`}> 
        <Navbar theme={theme} setTheme={setTheme}/>

        <RouterProvider router={router} />



       </div>
    </>
  )
}

export default App;

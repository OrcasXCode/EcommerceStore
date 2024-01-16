import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { About } from './components/About/About.jsx'
import { ContactUs } from './components/ContactUs/ContactUs.jsx'
import { Products } from './components/Products/Products.jsx'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import { Login } from './components/Login/Login.jsx'
import { SignUp } from './components/SignUp/SignUp.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:
    <Layout></Layout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"contactus",
        element:<ContactUs></ContactUs>
      },
      {
        path:"products",
        element:<Products></Products>
      },
      {
        path:"/productdisplay/:id",
        element:<ProductDisplay></ProductDisplay>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

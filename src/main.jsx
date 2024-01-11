import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Products } from './components/Products/Products.jsx'
import Home from './components/Home/Home.jsx'
import { ContactUs } from './components/ContactUs/ContactUs.jsx'
import { About } from './components/About/About.jsx'
import { Login } from './components/Login/Login.jsx'
import { SignUp } from './components/SignUp/SignUp.jsx'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay.jsx'
import { Cart } from './components/Cart/Cart.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,  
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"products",
        element:<Products></Products>
      },
      {
        path:"/productdisplay/:id",
        element: <ProductDisplay></ProductDisplay>
      },
      {
        path:"contactus",
        element:<ContactUs></ContactUs>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"signup",
        element:<SignUp></SignUp>
      },
      {
        path:'productdisplay',
        element:<ProductDisplay></ProductDisplay>
      },
      {
        path:"/cart/:id",
        element: <Cart></Cart>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

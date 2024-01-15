import React, { useState , useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { CartContext } from './components/context/context'

export function Layout(props) {

    const [cart, setCart] = useState(0)

    useEffect(()=>{
    const fetchCart=async ()=>{
        try{
            const res=await fetch('http://localhost:3000/api/v1/cart/getAllCartItems')
            const data=await res.json()
            setCart(data.allCartItems.length)
        }
        catch(error){
            console.log("Failed to fetch data",error)
        }
    }
    fetchCart()
    },[])
        

    return (
        <>
        <CartContext.Provider value={cart}>
            <Header setCart={setCart}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </CartContext.Provider>     
        </>
    )
}

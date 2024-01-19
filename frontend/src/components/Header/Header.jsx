import React, { useContext, useEffect, useState } from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart.png'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartAtom } from '../store/atoms/cart'


export default function Header() {
    const [sellerLogin,setSellerLogin]=useState(false);
    const [cartNumber,setCartNumber]=useRecoilState(cartAtom)
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname==="/"){
            setCartNumber(cartNumber);
        }
    },[location.pathname])

    

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>


                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contactus"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    
                    {sellerLogin ?<div className="flex items-center lg:order-2"> <Link
                            to="/sellerDasboard"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                        
                            Dashboard
                        </Link></div>:<div className="flex items-center lg:order-2">
                        <Link to="/cart" style={{position:'relative', marginRight:'20px'}}>
                            <img  src={Cart}  style={{height:'35px', marginLeft:'30px',position:'relative'}}></img>
                           
                            <div style={{color:'white',borderRadius:'100%',textAlign:'center',height:'20px',width:'20px',background:'black',position:'absolute' ,top:'-3px',right:'-0px'}}>   
                                <p style={{lineHeight:'10px',paddingTop:'4px'}}>{cartNumber}</p>
                            </div> 
                            
                        </Link>
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-black hover:grey focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                    </div>}
                    
                </div>
            </nav>
        </header>
    );
}
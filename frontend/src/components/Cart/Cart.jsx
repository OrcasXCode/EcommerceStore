import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, Trash } from 'lucide-react'
import { useRecoilState } from 'recoil';
import { cartAtom } from '../store/atoms/cart';
import {toast,Toaster} from "react-hot-toast"


export function Cart(props) {

    const[cartItem,setCartItem]=useState([]);
    // const[quantity,setQuantity]=useState(1);
    const[totalAmount,setTotalAmount]=useState()
    const location=useLocation();
    // const totalPrice=cartItem.reduce((total,cartItem)=>(total+cartItem.discountedPrice),0)
    // const totalDiscountedPrice = cartItem.reduce((total, cartItem) => (total + cartItem.discountedPrice), 0);
    const [cartNumber,setCartNumber]=useRecoilState(cartAtom)
    

    // useEffect(()=>{
    //     setTotalAmount(totalPrice*quantity)
    // },[quantity])

    useEffect(()=>{
        if(location.pathname==='/cart'){
            fetch("http://localhost:3000/api/v1/cart/getAllCartItems")
            .then(async function(res){
                const data=await res.json();
                setCartItem(data.allCartItems);
                
            })
        }
    },[location.pathname])

    useEffect(()=>{
      setCartNumber(cartItem.length);
      // console.log(cartNumber)
    },[location.pathname,cartItem])
  


    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
          <div><Toaster/></div>
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        {cartItem !== null && cartItem.length > 0 ? <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul key={cartItem.id} role="list" className="divide-y divide-gray-200">
              {cartItem.map((cartItem) => (
                <div key={cartItem.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={cartItem.image}
                        alt={cartItem.title}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a  className="font-semibold text-black">
                                {cartItem.title}
                              </a>
                            </h3>
                          </div>
                          {/* <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">{product.color}</p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div> */}
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {cartItem.price} $
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              &nbsp;&nbsp;{cartItem.discountedPrice}$
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">{cartItem.discount}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7"
                      onClick={()=>minusQuantity(cartItem)}>
                        -
                        </button>
                      <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                    {cartItem.quantity}
                  </span>
                  <button type="button" className="flex h-7 w-7 items-center justify-center"
                      onClick={()=>addQuantity(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0"
                      onClick={()=>{
                        fetch('http://localhost:3000/api/v1/cart/deleteCartItem',{
                            method:"DELETE",
                            body:JSON.stringify({
                              id:cartItem._id
                            }),
                            headers:{
                              'Content-Type':'application/json'
                            }
                        })
                        .then(async function(res){
                            if(res.ok){
                              const res=await fetch("http://localhost:3000/api/v1/cart/getAllCartItems")
                              const data=await res.json();
                              setCartItem(data.allCartItems);
                              setCartNumber((prevState)=>(prevState-1));
                              toast.success("Item deleted from cart")
                            }else{
                              throw new error("Failed to remove from cart")
                            }
                        })
                        .catch((e)=>{
                          toast.error("Failed to add in cart")
                        })
                      }}>
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>


          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price ({cartItem.length} items)</dt>
                  <dd className="text-sm font-medium text-gray-900">$ {totalAmount} </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">$ 0</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">$ {totalAmount}</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save $0 on this order
              </div>
            </div>
          </section>
        </form> : <p>No items in your cart</p>}
      </div>
    </div>
  )
}

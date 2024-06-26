import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {cartAtom} from '../store/atoms/cart'
import {toast,Toaster} from "react-hot-toast"

export function ProductDisplay() {
    
    const {id} = useParams()
    const [singleProduct,setsingleProduct]=useState([]);
    const [quantity,setQuantity]=useState(1)
    const [Size,setSize]=useState(null)
    const [ShowSize,setShowSize]=useState(false);
    const discprice=singleProduct.price+20
    const [cartNumber,setCartNumber]= useRecoilState(cartAtom)
  
    function addQuanity(){
        if(quantity<10){
            setQuantity(quantity+1)
        }
    }
    function minusQuantity(){
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    useEffect(()=>{
        function showSize(){
            if(singleProduct.category==="men's clothing" || singleProduct.category==="women's clothing"){
                setShowSize(true);
            }
        }
        showSize();
        // console.log(ShowSize)
    },[singleProduct.category])
    

    useEffect(()=>{
        const productdetails=async()=>{
            try{
                const res=await fetch(`https://fakestoreapi.com/products/${id}`)
                const data=await res.json();
                setsingleProduct(data)
                // console.log(data)
            }
            catch(error){
                console.log(error)
            }
        }
        productdetails();
    },[id])




    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
           <div><Toaster/></div>
          <div className="pt-8">
            <div className="flex items-center">
              <ol className="flex w-full items-center overflow-hidden">
                <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                  <a href="/">Home</a>
                </li>
                <li className="text-body mt-0.5 text-base">/</li>
                <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                  <a className="capitalize" href="/products">
                    products
                  </a>
                </li>
                <li className="text-body mt-0.5 text-base">/</li>
                <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                  <a className="capitalize" href="#">
                    {singleProduct.category}
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
            <div className="col-span-5 grid grid-cols-2 gap-2.5">
             
                <div key={singleProduct.id} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                  <img
                    src={singleProduct.image}
                    alt="Nike Air Max 95 By You--0"
                    className="w-full object-cover"
                  />
                </div>
              
            </div>
            <div className="col-span-4 pt-8 lg:pt-0">
              <div className="mb-7 border-b border-gray-300 pb-7">
                <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                  {singleProduct.title}
                </h2>
                <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                  {singleProduct.description}
                </p>
                <div className="mt-5 flex items-center ">
                  <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                    {singleProduct.price} $
                  </div>
                  <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                   
                    {discprice.toFixed(2)}  $
                  </span>
                </div>
              </div>
              
                
                  
                 {ShowSize===true ? (<div className="border-b border-gray-300 pb-3  "><div className="mb-4">
                  <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                    size
                  </h3><ul className="colors -mr-3 flex flex-wrap">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <li
                        key={size}
                        onClick={()=>{
                            setSize(size)
                        }}
                        className={`text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out ${
                            Size === size
                              ? 'border-black' 
                              : 'border-gray-100 hover:border-black'
                          } md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm `}>
                        {size}    
                      </li>
                    ))}
                  </ul> </div> </div>) : null}
               
                
             
              <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                  <button
                    className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    onClick={()=>addQuanity()}
                  >
                    +
                  </button>
                  <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                    {quantity}
                  </span>
                  <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                  onClick={()=>minusQuantity()}>
                    -
                  </button>
                </div>
                {/* <Link to={`/cart/${singleProduct.id}`}> */}
                <Link>
                <button
                  type="button"
                  className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={()=>{
                      fetch("http://localhost:3000/api/v1/cart/createcart",{
                      method:"POST",
                      body:JSON.stringify({
                        productId: singleProduct.id,
                        title:singleProduct.title,
                        price:singleProduct.price,
                        discountedPrice:singleProduct.price-20,
                        discount:40,
                        quantity:quantity,
                        image:singleProduct.image
                      }),
                      headers: {
                        "Content-type": "application/json"
                      }
                    })
                    .then(async function(res){
                      if(res.ok){
                        const json=await res.json();
                        setCartNumber((prevState)=>(prevState+1));
                        toast.success("Added in Cart")
                      }
                      else{
                        throw new error("Failed to add in cart");
                      }
                    })
                    .catch((e)=>{
                      toast.error("Failed to add in Cart")
                    })
                  }}>
                  Add to cart
                </button>
                </Link>
               
              </div>
              <div className="py-6 ">
                <ul className="space-y-5 pb-1 text-sm">
                  <li>
                    <span className="text-heading inline-block pr-2 font-semibold">SKU:</span>
                    N/A
                  </li>
                  <li>
                    <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
                    <a className="hover:text-heading transition hover:underline" href="#">
                      UniSex
                    </a>
                  </li>
                  <li className="productTags">
                    <span className="text-heading inline-block pr-2 font-semibold">Tags:</span>
                    <a
                      className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                      href="#"
                    >
                      {singleProduct.category}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="shadow-sm ">
                <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                  <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                    Product Details
                  </h2>
                  <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                    <div className="bg-heading h-0.5 w-full rounded-sm" />
                    <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                  </div>
                </header>
                <div>
                  <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                  {singleProduct.description}
                  </div>
                </div>
              </div>
              {/* <div className="">
                <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                  <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                    Additional Information
                  </h2>
                </header>
              </div> */}
              <div className="">
                <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                  <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                    Customer Reviews
                  </h2>
                </header>
              </div>
            </div>
          </div>
        </div>
      )
}

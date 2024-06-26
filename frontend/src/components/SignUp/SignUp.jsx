import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {toast,Toaster} from "react-hot-toast"
// import { DropDownList } from "@progress/kendo-react-dropdowns";

export function SignUp() {
  // const categories = ["User","Admin","Seller"];
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[userType,setUserType]=useState("User");

  return (
    <section>
      <div><Toaster/></div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Full Name{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                    ></input>
                  </div>
                      <select onChange={(e)=>{setUserType(e.target.value)}} style={{width: '200px' ,padding: '8px', fontSize: '14px',marginTop:'10px', border: '1px solid #ccc', borderRadius: '3px', outline: 'none'}}>
                          <option value="User" >User</option>
                          <option value="Admin">Admin</option>
                          <option value="Seller">Seller</option>
                      </select>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={()=>{
                      fetch('http://localhost:3000/api/v1/user/signup',{
                        method:"POST",
                        body:JSON.stringify({
                          name:name,
                          email:email,
                          password:password,
                          userType:userType
                        }),
                        headers:{
                          "Content-Type":"application/json"
                        },
                      })
                      .then(async function(res){
                        if(res.ok){
                          // alert("login sucessfull")
                          const data=await res.json();
                          toast.success("Sign Up successfull")
                        }
                        else{
                          throw new Error("Sign In Failed")
                        }
                      })
                      .catch((error)=>{
                        console.log(error)
                        toast.error("Sign Up Failed")
                      })
                    }}
                  
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

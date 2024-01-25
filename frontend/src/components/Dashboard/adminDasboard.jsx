import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export function AdminDasboard(props) {

  const [totalsellerscount,setTotalSellersCount]=useState(0);
  const [sellers,setSellers]=useState([]);
  const location=useLocation();

  useEffect(() => {
        const fetchData = async () => {
          if(location.pathname==='/adminDasboard'){
            try {
                const response = await fetch('http://localhost:3000/api/v1/admin/getAllSellers');
                const data = await response.json();
                setTotalSellersCount(data.length);
                setSellers(data);
                console.log("Sellers",sellers)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
          }
        };
        fetchData();
    },[location.pathname],[]); 

    return (
        <div style={{textAlign:'center'}}>  
            <h1 className='text-5xl font-bold'>Hello Admin</h1>
            <h3 className='text-3xl font-italics'>Welcome to Admin Dashboard</h3>
            <div className='mx-auto' style={{height:'500px',width:'500px',border:'1px solid black'}}>
              <div className=' mt-5 mx-auto flex flex-col items-center justify-center' style={{height:'100px',width:'200px',border:'1px solid black'}}>
                <h3>Total Seller's on Platform</h3>
                <p className='text-lg font-bold'>{totalsellerscount}</p>
              </div>
               <div className="mx-auto max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                {sellers.map((seller) => (
                  <div key={seller.id} className="rounded-md border max-w-7xl h-full">
                      <div className="p-4">
                        <h1 className=" items-center text-lg font-semibold">Name:- {seller.name}</h1>
                        <h1 className=" items-center text-lg font-semibold">emailID:- {seller.email}</h1>
                        <h1 className=" items-center text-lg font-semibold">ID:- {seller.id}</h1>
                        <h1 className=" items-center text-lg font-semibold">Products On Sale:- {seller.productsOnSale.length}</h1>
                      </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    )
}

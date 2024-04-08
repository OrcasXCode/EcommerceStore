import React, { useEffect, useState } from 'react';

export function SellerDashboard(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI3MmJjMWUwZTQ4NDU2NjA1NTVkMzAiLCJlbWFpbCI6Im9tQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU0ODI0NSwiZXhwIjoxNzEyNjM0NjQ1fQ.QCU57uK3SaaY8UitOOmG13vNrbMmrBkbrBLVGkjFsrg";
        const response = await fetch('http://localhost:3000/api/v1/seller/getMyProduct', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data.seller.productsOnSale);
        setProducts(data.seller.productsOnSale);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='text-5xl font-bold mb-4 mt-5'>Hello Seller</h1>
      <h3 className='text-3xl font-italic mb-4'>Explore your products which are on sale</h3>
      <div>
        <h3 className='mt-5 mb-5'>Your Products</h3>
        {/* Forgot to return inside the map function so got product.map is not a function */}
        <div className=" max-w-7xl mt-5 mb-5 gap-5"> 
          {products.map((product) => (
            <div key={product.id} className='flex h-[300px] justify-between max-w-7xl'>
              <div>
                <img src={product.image} alt={product.title} className='h-full' />
              </div>  
              <div>
                <p className='text-2xl'> Product Id:- {product.productId}</p>
                <p className='text-2xl'> Title:- {product.title}</p>
                <p className='text-2xl'> Description:- {product.description}</p>
                <p className='text-2xl'>Discount:- {product.discount}</p>
                <p className='text-2xl'>Original Price:- {product.price}</p>
                <p className='text-2xl'>Discounted Price:- {product.discountedPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

export function SellerDashboard(props) {
  useEffect(() => {
    const fetchData = async () => {
      if (location.pathname === '/sellerDasboard') {
        try {
          const token = Cookies.get('token'); // Retrieve the token from cookies
          const response = await fetch('http://localhost:3000/api/v1/seller/getMyProduct', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [location.pathname]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='text-5xl font-bold'>Hello Seller</h1>
      <h3 className='text-3xl font-italics'>Explore your products which are on sale</h3>
    </div>
  );
}

import React, { useEffect } from 'react'

export function AdminDasboard(props) {

    useEffect(() => {
        const fetchData = async () => {
            try {
              // https://dummyjson.com/products
                const response = await fetch('http://localhost:3000/api/v1/admin/getAllSellers');
                const data = await response.json();
                console.log(data.allSellers)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
   
    

    return (
        <div style={{textAlign:'center'}}>  
            <h1>Hello Admin</h1>
            <h3>Welcome to Admin Dashboard</h3>
        </div>
    )
}

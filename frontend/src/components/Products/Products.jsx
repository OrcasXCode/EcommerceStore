import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';

export function Products(props) {
    const [products, setProducts] = useState([]);
    const [id,setId]=useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              // https://dummyjson.com/products
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                // console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
   
    

    return (
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-md border h-full">
           
             
              <img
                src={product.image}
                alt={product.title}
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
              
                <Link to={`/productdisplay/${product.id}`}>
                  <button
                    onClick={(e)=>{
                      const ID=product.id
                      setId(ID)
                    }}
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black *
                    "
                  >
                    Shop Now
                  </button>
                </Link>
                
              </div>
        
          </div>
        ))}
      </div>
    );
}

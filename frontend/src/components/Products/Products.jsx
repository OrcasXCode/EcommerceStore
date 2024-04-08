import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';
import {ScaleLoader} from "react-spinners"

export function Products(props) {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3000/api/v1/product/all-products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-auto grid grid-cols-8 w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {loading ? (
                <div className='h-full w-full'>
                  <ScaleLoader color="#000000" className='mx-auto'/>
                </div>
            ) : (
                products.map((product) => (
                    <div key={product.id} className="rounded-md border max-w-7xl h-full">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                        />
                        <div className="p-4">
                            <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
                            <Link to={`/productdisplay/${product.id}`}>
                                <button
                                    onClick={(e) => {
                                        const ID = product.id
                                        setId(ID)
                                    }}
                                    type="button"
                                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

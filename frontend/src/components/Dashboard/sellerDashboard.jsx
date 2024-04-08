import React, { useEffect, useState } from 'react';

export function SellerDashboard(props) {
    const [products, setProducts] = useState([]);
    const [productId,setProductId]=useState("");
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrcie]=useState("");
    const [discount,setDiscount]=useState("");
    const [discountedPrice,setDiscountedPrice]=useState("");
    const [image,setImage]=useState("");

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
    <div>
      <h1 className='text-5xl font-bold mb-4 mt-5 text-center'>Hello Seller</h1>
      <h3 className='text-3xl font-italic mb-4 text-center mt-[50px]'>Explore your products which are on sale</h3>
      <div>
        {/* Forgot to return inside the map function so got product.map is not a function */}
        <div className="mb-[100px] mt-[100px]">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Add New Products</p>
                <p className="mt-4 text-lg text-gray-600">
                  Fill the required details and add a new product for sale
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        Product ID
                      </label>
                      <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300  px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"                        type="text"
                        id="first_name"
                        placeholder="ID"
                        onChange={(e)=>{
                          setProductId(e.target.value)
                        }}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Title
                      </label>
                      <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Title"
                        onChange={(e)=>{
                          setTitle(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Description
                    </label>
                    <input
                      style={{color:'black'}}
                      className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Description"
                      onChange={(e)=>{
                        setDescription(e.target.value)
                      }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Price
                    </label>
                    <input
                      style={{color:'black'}}
                      className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Price"
                      onChange={(e)=>{
                        setPrcie(e.target.value)
                      }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Discounted Price
                    </label>
                    <input
                      style={{color:'black'}}
                      className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                      onChange={(e)=>{
                        setDiscountedPrice(e.target.value)
                      }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Discount (%)
                    </label>
                    <input
                      style={{color:'black'}}
                      className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Discount (%)"
                      onChange={(e)=>{
                        setDiscount(e.target.value)
                      }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Product_URL
                    </label>
                    <textarea
                      style={{color:'black'}}
                      className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="URL (https://xyz.png)"
                      cols={3}
                      onChange={(e)=>{
                        setImage(e.target.value)
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={()=>{
                      fetch('http://localhost:3000/api/v1/seller/addNewProduct',{
                        method:"POST",
                        body:JSON.stringify({
                          productId:productId,
                          title:title,
                          description:description,
                          price:price,
                          discountedPrice:discountedPrice,
                          discount:discount,
                          image:image
                        }),
                        headers:{
                          "Content-Type":"application/json"
                        }
                      })
                      .then(async function(res){
                        if(res.ok){
                          const data = await res.json();
                          toast.success("Message Sent");
                        }
                        else{
                          throw new error("Failed sent message");
                        }
                      })
                      .catch((error)=>{
                        toast.error("Failed to send message");
                      })
                    }}
                  >
                    Add Product
                  </button>
                </form>
              </div>
            </div>
        <div className="max-w-7xl mt-5 mb-5 text-center mx-auto"> 
          {products.map((product) => (
            <div key={product.id} className='flex h-[250px] justify-between max-w-7xl'>
              <div>
                <img src={product.image} alt={product.title} className='h-full w-[300px]' />
              </div>  
              <div className='flex-col items-center justify-center mx-auto'>
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

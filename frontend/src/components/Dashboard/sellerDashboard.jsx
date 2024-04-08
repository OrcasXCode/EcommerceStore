import React, { useEffect, useState } from 'react';



export function SellerDashboard(props) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [image, setImage] = useState("");

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI3MmJjMWUwZTQ4NDU2NjA1NTVkMzAiLCJlbWFpbCI6Im9tQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU0ODI0NSwiZXhwIjoxNzEyNjM0NjQ1fQ.QCU57uK3SaaY8UitOOmG13vNrbMmrBkbrBLVGkjFsrg";
                const response = await fetch('http://localhost:3000/api/v1/seller/getMyProduct', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI3MmJjMWUwZTQ4NDU2NjA1NTVkMzAiLCJlbWFpbCI6Im9tQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU0ODI0NSwiZXhwIjoxNzEyNjM0NjQ1fQ.QCU57uK3SaaY8UitOOmG13vNrbMmrBkbrBLVGkjFsrg`,
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

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return (
            product.productId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Products</h3>
                <p class="text-sm text-muted-foreground">View and manage your products</p>
            </div>
             <form action="" className="mt-8 space-y-4 max-w-7xl mx-auto">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                        <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="product_id"
                        >
                            ID
                        </label>
                        <input
                            style={{color:'black'}}
                            className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="text"
                            id="product_id"
                            placeholder="Product ID"
                            onChange={(e)=>{
                                setProductId(e.target.value)
                            }}
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="product_title"
                        >
                            Title
                        </label>
                        <input
                            style={{color:'black'}}
                            className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="text"
                            id="product_title"
                            placeholder="Product Title"
                            onChange={(e)=>{
                                setTitle(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="product_description"
                    >
                        Description
                    </label>
                    <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="product_description"
                        placeholder="Product Description"
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                    />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="product_price"
                    >
                        Price
                    </label>
                    <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="product_price"
                        placeholder="Product Price"
                        onChange={(e)=>{
                            setPrice(e.target.value)
                        }}
                    />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="product_discounted_price"
                    >
                        Discounted Price
                    </label>
                    <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="product_discounted_price"
                        placeholder="Discounted Price"
                        onChange={(e)=>{
                            setDiscountedPrice(e.target.value)
                        }}
                    />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="product_discounted_price"
                    >
                        Discount
                    </label>
                    <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="product_discounted_price"
                        placeholder="Discounted Price"
                        onChange={(e)=>{
                            setDiscount(e.target.value)
                        }}
                    />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="product_image"
                    >
                        Image URL
                    </label>
                    <input
                        style={{color:'black'}}
                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="product_image"
                        placeholder="Image URL"
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
                                productId: productId,
                                title: title,
                                description: description,
                                price: price,
                                discountedPrice: discountedPrice,
                                discount:discount,
                                 image: {
                                    src: image
                                }
                            }),
                            headers:{
                                "Content-Type":"application/json",
                                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI3MmJjMWUwZTQ4NDU2NjA1NTVkMzAiLCJlbWFpbCI6Im9tQGdtYWlsLmNvbSIsImlhdCI6MTcxMjU0ODI0NSwiZXhwIjoxNzEyNjM0NjQ1fQ.QCU57uK3SaaY8UitOOmG13vNrbMmrBkbrBLVGkjFsrg`,
                            }
                        })
                        .then(async function(res){
                            if(res.ok){
                                const data = await res.json();
                                console.log(data);
                                alert("Product Added Successfully");
                            }
                            else{
                                throw new Error("Failed to add product");
                            }
                        })
                        .catch((error)=>{
                            console.log(error);
                            alert("Failed to add product");
                        });
                    }}
                >
                    Add Product
                </button>
            </form>
            <div class="p-6">
                <div class="flex items-center gap-4">
                    <form class="flex items-center gap-2">
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                            for="search"
                        >
                            Search
                        </label>
                        <input
                            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-72 md:w-96"
                            id="search"
                            placeholder="Search"
                            type="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div class="overflow-auto w-full mt-4">
                    <div class="relative w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
                            <thead class="[&amp;_tr]:border-b">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                                        Product ID
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Image
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Title
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                        Description
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Price
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Discounted Price
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Discount
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]"></th>
                                </tr>
                            </thead>
                            <tbody class="[&amp;_tr:last-child]:border-0">
                                {filteredProducts.map((product) => (
                                    <tr class="border-b transition-colors data-[state=selected]:bg-muted bg-gray-100/40 even:bg-white hover:bg-gray-100 ">
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{product.productId}</td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex w-[100px] h-[60px] items-start">
                                            <img
                                                src={product.image}
                                                width="80"
                                                height="40"
                                                class="aspect-video object-cover"
                                                alt="Product image"
                                            />
                                        </td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{product.title}</td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{product.description}</td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">₹ {product.price}</td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">₹ {product.discountedPrice}</td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{product.discount}%</td>
                                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

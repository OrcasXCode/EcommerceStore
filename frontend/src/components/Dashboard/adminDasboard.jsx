import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export function AdminDasboard(props) {
  const [totalsellerscount, setTotalSellersCount] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (location.pathname === '/adminDasboard') {
        try {
          const response = await fetch('http://localhost:3000/api/v1/admin/getAllSellers');
          const data = await response.json();
          setTotalSellersCount(data.length);
          setSellers(data);
          console.log("Sellers", sellers)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [location.pathname]); // Removed the empty dependency array

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter sellers based on search query
  const filteredSellers = sellers.filter((seller) => {
    return seller.name.toLowerCase().includes(searchQuery.toLowerCase()) || seller.email.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Sellers</h3>
        <p class="text-sm text-muted-foreground">View and manage your sellers</p>
      </div>
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
          {filteredSellers.map((seller) => (
            <div key={seller.id} class="relative w-full overflow-auto">
              <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                  <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                      ID
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Name
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Email ID
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Products
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]"></th>
                  </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                  <tr class="border-b transition-colors data-[state=selected]:bg-muted bg-gray-100/40 even:bg-white hover:bg-gray-100">
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> {seller.id}</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 "> {seller.name}</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{seller.email}</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"> {seller.productsOnSale.length}</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

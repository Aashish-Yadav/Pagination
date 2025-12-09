import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

    function Pagination() {

        const [products , setProducts] = useState([])
        const [currentPage, setCurrentPage] = useState("0");


        const fetchData = async () => {
            const res = axios.get(`https://dummyjson.com/products/?limit=100`)
            .then((res) => {
                // console.log("response :",res?.data?.products);
                //             console.log("response :",res?.data?.products[0]?.title);

                setProducts(res?.data?.products)                
            })
        }

        useEffect(()=> {
            fetchData();
        },[])

        const totalSize = 10;
        const totalProducts = products.length;
        const pages = Math.ceil(totalProducts/totalSize);
        // console.log(pages)
        const start = currentPage*totalSize;
        const end = start + totalSize;

        const handlePageChange = (n) => {
            setCurrentPage(n)
        }
        console.log(currentPage)


        const prevPage = () => {
            setCurrentPage((prev)=>prev-1)
        }

        const nextPage = () => {
            setCurrentPage((prev)=>prev+1)
        }


    return (
        <div className='text-center p-4'> 
        <h1 className='text-3xl font-bold'>PAGINATION</h1>
            
            <div className='flex flex-row flex-wrap gap-8 justify-center' >
             
            {
                products.slice(start,end).map((items,index)=> (
                    <div key={items.id} >
                        <ul >
                            <ProductCard products={items}/>
                        </ul>
                    </div>
                ))
            }
           
            </div>
            <div className='p-8'>
                <button disabled={currentPage===0} className='cursor-pointer' 
                onClick={prevPage}>
                  ◀️  
                </button>
                {                
                    [...Array(pages).keys()].map((n) => (
                        <span key={n}  className={`p-4 border m-2 cursor-pointer ${currentPage===n ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}` }
                        value={currentPage}
                        onClick={()=> handlePageChange(n)}>{n+1}</span>
                    ))
                }
                <button disabled={currentPage===pages-1} className='cursor-pointer'
                onClick={nextPage}>
                    ▶️
                </button>
            </div>
        </div>
    )
    }

    export default Pagination
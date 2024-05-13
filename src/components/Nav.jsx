import React, { useContext } from "react"
import { ProductContext } from "../utils/Context"
import { Link } from "react-router-dom";

export default function Nav(){

  const [products] = useContext(ProductContext);

  let distinct_category = 
      products && products.reduce((acc, cv)=> [...acc, cv.category],[]) 
      distinct_category = [...new Set(distinct_category)]
      // console.log(distinct_category)

    return (
        <nav className='w-[15%] h-full bg-[#669bbc] flex flex-col items-center pt-5'>
        <a className='py-2 px-5 text-[#003049] border border-blue-200 rounded-md mb-3' href="/create">Add new Product</a> 
        <hr className='w-[80%] my-3' />
        <h1 className='text-2xl w-[80%] mb-3 '>Category Filter</h1>
        <div className=' w-[80%]'>
          {distinct_category.map((c,i) => (
            <Link 
            key={i}
            to={`/?category=${c}`}
            className='flex items-center mb-3 hover:bg-gray-300'>
                <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-100'></span>{c}
            </Link>
          ))}
        </div>
     </nav>
    )
}
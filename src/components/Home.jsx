import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { ProductContext } from '../utils/Context'
import Loading from '../components/Loading'
import { useContext, useEffect, useState } from 'react'
import axios from "../utils/axios"


export default function Home(){
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split('=')[1])
    // console.log(category)

    const [filteredproducts, setfilteredproducts] = useState(null)

    const getproductscategory =async () => {
        try{
            const { data } = await axios.get(`/products/category/${category}`)
            setfilteredproducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!filteredproducts || category == "undefined") setfilteredproducts(products);
        if (category != "undefined") getproductscategory()
    },[category, products])

    // console.log(filteredproducts)

    return products ? (
        <>
        <Nav/>
        <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto '>
            {filteredproducts && filteredproducts.map((p,i) => (
                <Link
                key={p.id}
                to={`details/${p.id}`}
                className='p-3 mr-3 mb-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center'>
                    <div className='hover:scale-100 scale-90 duration-700 w-full h-[80%] bg-contain bg-no-repeat bg-center'
                         style={{backgroundImage:
                        `url(${p.image})`
                     }}
                    ></div>
                    <h1 className='hover:text-blue-400'>{p.title}</h1>
                </Link>
            ))}
       </div>
       </>
    ) : (
        <Loading/>
    )
}
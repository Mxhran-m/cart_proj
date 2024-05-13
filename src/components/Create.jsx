import React from "react";
import { useState } from "react";
const Create = () => {
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    const addProductHandler = (e) => {
        e.preventDefault();
        const product ={
            title,
            image,
            category,
            price,
            description
        }
        // console.log(product)
    }

    return (
        <form onSubmit={addProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
            <h1 className="mb-5 w-1/2 text-3xl">Add new product</h1>
            <input 
                value={image}
                type="url" 
                placeholder="Image link"
                className="w-1/2 text-xl bg-zinc-100 rounded mb-3 p-3"
                onChange={(e) => setimage(e.target.value)}
            />
            <input 
                value={title}
                type="text" 
                placeholder="Title"
                className="w-1/2 text-xl bg-zinc-100 rounded mb-3 p-3"
                onChange={(e) => settitle(e.target.value)}
            />
            <div className="w-1/2 flex gap-3">
                <input 
                    value={category}
                    type="text" 
                    placeholder="category"
                    className="w-1/2 text-xl bg-zinc-100 rounded mb-3 p-3"
                    onChange={(e) => setcategory(e.target.value)}
                />
                <input 
                    value={price}
                    type="number" 
                    placeholder="price"
                    className="w-1/2 text-xl bg-zinc-100 rounded mb-3 p-3"
                    onChange={(e) => setprice(e.target.value)}
                />
            </div>
            <textarea
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="Enter product description here..."
                className="w-1/2 text-xl bg-zinc-100 rounded mb-3 p-3"
            ></textarea>
            <div className="w-1/2">
                <button 
                    className='py-2 px-5 text-[#003049] border border-blue-200 rounded-md mb-3'
                    >Add new Product
                </button> 
            </div>
        </form>
    );
};

export default Create;  
import React, { useState } from 'react'
import { categoryNames } from '../products/products'
import ProductArea from './ProductArea';
import { useEffect } from 'react'




function Categories() {
    const [selectedCat, setSelectedCat] = useState('chinese');

    function handleCatChange(e){
        let activeCat = e.target.id.toLowerCase()
        setSelectedCat(activeCat)
    }

    useEffect(()=>{
        console.log('categories-rendered')
    })

    return (
        <>
            <section className='bg-gray-200 mb-10  h-[100px] p-6  flex justify-center items-center z-10'>
                <div className='p-2 flex justify-center items-center gap-4 lg:gap-8 overflow-x-auto'>
                    <span className='text-3xl'>🍲</span>
                    {categoryNames.map((category,index)=>{
                        return (
                            <div  key={index} className={`hover:cursor-pointer hover:border-b-2 border-black/70 ${category.toLowerCase() == selectedCat? 'border-b-2' : null}`}>
                                <h1 onClick={handleCatChange} id={category} className='text-lg mx-2 lg:mx-4 text-black/70 font-bold'>{category.toUpperCase()}</h1>
                            </div>
                        )
                    })}
                    <span className='text-3xl'>🍲</span>
                </div>
            </section> 

            <ProductArea category={selectedCat} />       
        </>
    )
}

export default Categories

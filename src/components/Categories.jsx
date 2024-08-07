import React, { useState } from 'react'

import ProductArea from './ProductArea';
import { useEffect } from 'react'
import { getAllProducts } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';






function Categories() {

    const navigate = useNavigate();

    const [selectedCat, setSelectedCat] = useState('');
    const [categories, setCategories] = useState([])
    const [catButton, setCatButton] = useState(true)
    let cat;


    useEffect(()=>{
        
        
        getAllProducts().then((res)=>{
            console.log(res)
            cat = []
            for (let record of res){
            cat.push(record.store)
            }
            console.log(cat)
            // setCategories(prev=> [...prev, ...cat])
        })    
        
    },)


    function handleCatChange(e){
        let activeCat = e.target.id.toLowerCase()
        setSelectedCat(prev => activeCat)
        navigate(`/store/${activeCat}`)
    }


    function viewCattegories(){
        setCatButton(false);
        cat? setCategories([...cat]) : null
        
    }
    
    
    

    return (
        <>
            <section className='bg-gray-200 mb-10  h-[100px] p-6  flex-col justify-center items-center z-10'>
                <div className='p-2 flex justify-center items-center gap-4 lg:gap-8 overflow-x-auto'>
                    <span className='text-3xl'>🍲</span>
                    {categories?.map((category,index)=>{
                        return (
                            <div  key={index} className={`hover:cursor-pointer hover:border-b-2 border-black/70 ${category.toLowerCase() == selectedCat? 'border-b-2' : null}`}>
                                <h1 onClick={handleCatChange} id={category} className='text-lg mx-2 lg:mx-4 text-black/70 font-bold'>{category.toUpperCase()}</h1>
                            </div>
                        )
                    })}
                    {
                        catButton && <button onClick={viewCattegories} className='rounded-full px-4 py-2 bg-black/20 hover:bg-black/40 shadow-inner shadow-white text-white'>{'<<<'} shops {'>>>'}</button>
                    }
                    <span className='text-3xl'>🍲</span>
                </div>
                
            </section> 

            {/* <ProductArea category={selectedCat} />        */}
        </>
    )
}

export default Categories

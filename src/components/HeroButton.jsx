import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function HeroButton() {

    const navigate = useNavigate();
    let user;
   

    useEffect( ()=>{

        user =  localStorage.getItem("currUser")
        
        
        
    },[])

    function addProduct(){
        user? navigate('/create-store') : navigate('/login');
    }

    return (
        <>
            <section className=' flex justify-center items-center pb-8'>
                <div onClick={addProduct} className='flex px-6 py-3 items-center justify-center rounded-full bg-yellow-400  max-w-[350px] hover:cursor-pointer hover:bg-yellow-500 hover:scale-x-105 duration-200'>
                    <h1 className='text-2xl lg:text-3xl text-black/90 font-bold'>Add Product</h1>
                </div>
            </section>
        </>
    )
}

export default HeroButton

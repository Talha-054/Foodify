import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { useEffect } from 'react'


function OrderCard({price, item, uniqueId}) {

    const [quantity, setQuantity] = useState()
    const [cart, setCart] = useContext(CartContext);

    function handleQuantity(e){
        if (parseInt(e.target.value) < 0) return;
        setQuantity(e.target.value)
    }

    function delFromCart(e){
        let updatedCart = cart.filter((item,index)=> e.target.id != index)
        setCart([...updatedCart])
    }


    useEffect(()=>{
        console.log('order-card-rendered')
    })

    return (
        <>
            <section className=' break-words py-4 '>
                <div className='flex justify-end'>
                    <span onClick={delFromCart} id={uniqueId} className='px-2 hover:cursor-pointer hover:scale-110 duration-75'>❌</span>
                </div>
                <div className='bg-black/60 px-12 gap-1 py-8 rounded-lg flex flex-col justify-start items-center ' >

                    <h1 className='text-xl text-white font-medium'>{item}</h1>
                    <h1 className='text-xl text-white font-medium'>{price} $</h1>
                    <input value={quantity} onChange={handleQuantity} type="number" className='px-4 py-2 rounded-xl bg-black/80 text-center text-xl text-white font-medium' placeholder='quantity'  />
                    <h1 className='border-t-2 text-white text-xl font-bold mt-4 w-full text-center border-white/50'>{price* (quantity < 0? 0:quantity) || 0} $</h1>
                    
                    
                </div>
            </section>
        </>
    )
}

export default OrderCard

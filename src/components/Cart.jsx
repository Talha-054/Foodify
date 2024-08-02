import React from 'react'
import cartImg from '../assets/cart.png'
import OrderCard from './OrderCard'
import { ModalContext } from '../contexts/ModalContext'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { useEffect } from 'react'


function Cart() {

    const [backdropStatus, setBackdropStatus] = useContext(ModalContext);
    const [cart, setCart] = useContext(CartContext);

    function handleBackdrop(){
        setBackdropStatus(false)
    }

    useEffect(()=>{
        console.log('cart-rendered')
    })

    return (
        <>
            
            <section className='flex w-full flex-col  z-20   '>

                <div className='w-full flex justify-end items-center fixed top-0 right-0 p-6'>
                    <span onClick={handleBackdrop} className='font-bold text-black text-4xl hover:cursor-pointer hover:scale-110 duration-150  shadow-lg'>✖️</span>
                </div>

                
                <div className='w-full flex justify-center items-center'>
                    <img src={cartImg} alt="" className='h-20 w-20'/>
                </div>

                <h1 className='text-2xl font-bold py-2 text-center text-white/70 mb-6 '>YOUR ORDER</h1>

                <div className='my-4 flex flex-col lg:flex-row lg:flex-wrap lg:gap-10 justify-start  lg:justify-center items-center w-full h-[80vh]   overflow-auto py-8 px-2  rounded-xl shadow-lg '>
                    
                    {cart?.map((item,index)=>{
                        return (
                            <OrderCard item={item.name}
                                       price={item.price}
                                       key={index}
                                       uniqueId={index}/>
                        )
                    })}
                    
                    

                    <div className='p-2 w-full border-b-2 border-white/70'></div>

                    <div className='p-4 py-8'>
                        <h1 className='text-2xl rounded-2xl bg-black/90 px-4 py-2 font-bold overflow-auto  text-white mb-6 '> {cart.length? 'PROCEED TO CHECKOUT':''}</h1>
                    </div>
                    
                </div>

                

            </section>
        </>
    )
}

export default Cart

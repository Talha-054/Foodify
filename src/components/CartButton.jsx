import React, { useEffect } from 'react'
import { ModalContext } from '../contexts/ModalContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import { motion } from 'framer-motion';
import Modal from './Modal';

function CartButton() {

    const [backdropStatus, setBackdropStatus] = useContext(ModalContext);
    const [cart, setCart] = useContext(CartContext);

    function handleBackdrop(){
        setBackdropStatus(true)
    }

    // useEffect(()=>{
    //     console.log('cart-button-comp rendered')
    // })

    return (
        <>
            { backdropStatus && <Modal />}
            <div
            onClick={handleBackdrop} id='cart' className="py-2 lg:py-3 hover:text-white hover:cursor-pointer hover:bg-purple-500 px-4 lg:px-8 flex rounded-full justify-evenly items-center gap-2 bg-purple-300 hover:scale-x-105 duration-200">

                <span className='text-2xl hover:scale-110 duration-200 hover:cursor-pointer'>🛒</span>
                <span className='hidden md:inline font-semibold'>Your Cart</span>
                <motion.span 
                key={Math.random()}
                initial={{scale:0.5}}
                animate={{scale:1}}
                transition={{duration:0.5, type:'spring'}}
                className='px-4 py-2 ml-2 font-medium rounded-full bg-purple-400'>{cart.length}</motion.span>
            </div>
        </>
    )
}

export default CartButton

import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import CartButton from './CartButton';



function Header() {

    

    return (
        <>
            <header className='fixed px-4 top-1 w-full  z-[5] '>
                <motion.section
                initial={{y:'-100vh'}}
                animate= {{y:0}}
                transition={{delay:1, duration: 2}}
                className='flex rounded-full bg-opacity-25 shadow-lg bg-purple-200 justify-between px-4 lg:px-8 py-4 items-center backdrop-blur-[3px]'>
                    <div>
                        <h1 className='text-3xl font-bold hover:cursor-pointer hover:scale-x-105 duration-200'>
                            <span className='text-[#FFB200]'>F</span>
                            <span className='text-black/60'>OOD</span>
                            <span className='pl-2 text-black/70'>APP</span>
                        </h1>
                    </div>
                    

                    <CartButton />
                    
                </motion.section>
            </header>
        </>
    )
}

export default Header;


import React from 'react'
import { motion} from 'framer-motion'
import { useEffect } from 'react'

function Hero({children}) {

    useEffect(()=>{
        console.log('hero-comp-rendered')
    })

    return (
        <>
            <main>
                <motion.div
                initial={{}}
                animate= {{}}
                transition={{}}
                className={`h-[45vh] md:h-[50vh] lg:h-[60vh] bg-hero-img2 bg-cover bg-center flex flex-col justify-end`}>
                    {children}
                    
                </motion.div>
            </main>
        </>
    )
}

export default Hero

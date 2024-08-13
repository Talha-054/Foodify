import React from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Loader() {


    const navigate = useNavigate()
    
    useEffect(()=>{
        setTimeout(()=>{
            let user = localStorage.getItem('currUser')
            user? null : navigate('/login')
            
        },2000)
        
    })


    return (
        <>
            <motion.div
            initial={{}}
            animate={{ display:'none'}}
            transition={{duration:2}} 
            className='bg-purple-500 h-screen top-0 z-50 w-screen overflow-hidden fixed flex justify-center items-center'>

                <motion.div 
                animate={{rotate:360}}
                transition={{repeat:Infinity, duration:1.3, type:'spring'}}>
                
                    <span className='text-4xl lg:text-9xl rounded-full'>🍴
                    </span>
                </motion.div>

            </motion.div>
        </>
    )
}

export default Loader

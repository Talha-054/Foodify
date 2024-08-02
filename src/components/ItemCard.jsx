import React, { useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'
import { motion } from 'framer-motion';

function ItemCard({name, description, price, img}) {

    const [cart, setCart] = useContext(CartContext);
    const [itemAdded, setItemAdded] = useState(false);

    


    useEffect(()=>{
        console.log("reached useEffect")
        let currItem = cart.find((item)=> item.name == name)
        if (currItem){
            setItemAdded(true)
           
        }else{
            setItemAdded(false)
            
        }
        
    },[cart])

    console.log("item-card-updated")
    



    function addToCart(e){

        if (itemAdded){
            let updatedCart = cart.filter((item)=> item.name != name)
            setCart([...updatedCart])
            // setItemAdded(!itemAdded)
            
        }else{
            let obj = {
                name: name,
                price: price,
                total: price
            }
    
            setCart(prevCart => [...prevCart, obj])
            // setItemAdded(!itemAdded)
        }

        
    }

    return (
        <>
            <div className='w-[380px] h-[450px] break-words flex flex-col items-center p-4 rounded-2xl shadow-lg bg-white/90 backdrop-blur-[2px] hover:cursor-pointer  hover:shadow-2xl duration-500 '>
                <div className='flex justify-start w-full mb-2 pl-1'>
                    <h1 className='text-xl text-black/90 font-semibold'>{name}</h1>
                </div>

                <div className='w-full pl-1 h-[50px]'>
                    <p className='text-black/90'>{description}</p>
                </div>

                <div className='w-full h-[300px] my-3'>
                    <div className='w-full h-full relative '>
                        <img src={img} alt="" className='absolute opacity-90 duration-500 rounded-lg shadow-sm w-full h-full' />
                    </div>
                </div>

                <div className='w-full flex justify-between pl-1 mt-4 items-center '>
                    <h1 className='font-bold text-black/90 text-lg'>{price} $</h1>
                    <motion.div>
                        <button   onClick={addToCart} className='px-4 py-2 bg-purple-200 rounded-full text-black/80 font-semibold hover:bg-purple-300 hover:scale-x-105 duration-75'>{itemAdded? 'Item Added to Cart': 'Add To Cart'} <span className='text-xl text-black'>{itemAdded? '✅':'🛒'}</span></button>
                    </motion.div>
                </div>

                <div className='w-full flex justify-between items-center'>

                    {/* <div className='pt-2'>
                        <label htmlFor="amount" className='mx-1 text-black/90 text-md font-bold'>Amount</label>
                        <input type="number" id='amount' className='px-2 py-1 rounded-full bg-purple-200 max-w-[100px]' />
                    </div> */}

                </div>
                
            </div>
        </>
    )
}

export default React.memo(ItemCard)

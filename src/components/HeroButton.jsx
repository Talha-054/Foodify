import React from 'react'
import { useEffect } from 'react'

function HeroButton() {


    useEffect(()=>{
        console.log('hero-button-rendered')
    })


    return (
        <>
            <section className=' flex justify-center items-center pb-8'>
                <div className='flex px-6 py-3 items-center justify-center rounded-full bg-yellow-400  max-w-[350px] hover:cursor-pointer hover:bg-yellow-500 hover:scale-x-105 duration-200'>
                    <h1 className='text-2xl lg:text-3xl text-black/90 font-bold'>ORDER NOW !</h1>
                </div>
            </section>
        </>
    )
}

export default HeroButton

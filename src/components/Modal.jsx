import React from 'react'
import Cart from './Cart'


function Modal() {

  


    return (
        <>
            <div id='backdrop' className=' flex-col  fixed top-0 left-0 flex justify-start items-center  overflow-hidden bg-black/80 z-10 h-screen w-screen'>

                
                <Cart />
            </div>
        </>
    )
}

export default Modal

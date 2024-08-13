import React, { useEffect, useRef } from 'react'
import { addProduct } from '../firebase/auth'

function AddProduct() {

    let priceRef = useRef()
    let nameRef = useRef()
    let descriptionRef = useRef()
    let imgRef = useRef()

    let store;


    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('currUser'));
        store = user.store
    },[])
    



    function handleSubmit (e){
        e.preventDefault();
        
        
        if (nameRef.current.value.trim() == ''){
            return;
        }
        if (descriptionRef.current.value.trim() == ''){
            return;
        }
        if (imgRef.current.value.trim() == ''){
            return;
        }
        if (priceRef.current.value.trim() == ''){
            return;
        }
       


        let product = {
            
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            img: imgRef.current.value,
            price: priceRef.current.value
        }
        

        try {
            let res = addProduct(product)
            
            if (res){
                nameRef.current.value = '';
                descriptionRef.current.value = '';
                priceRef.current.value = '';
                imgRef.current.value = ''
            }
            
        } catch (error) {
            console.log(error)
        }

        

        


    }


    return (
        <>
            <section className='bgImg2 bg-cover h-screen overflow-hidden flex flex-col justify-start items-center px-8'>
                
                <form action="" className='min-w-[350px] p-14 px-20 rounded-2xl mt-14 flex flex-col gap-8 backdrop-blur-[2px] shadow-inner shadow-black/20 hover:backdrop-blur-md duration-300 hover:bg-black/30'>
                    
                    <div className='flex flex-col gap-1 '>
                        <label className='pl-3 text-white/80  text-xl font-medium' htmlFor="name">Product Name</label>
                        <input ref={nameRef} type="text" className='w-[350px] px-2 py-2 rounded-2xl outline-purple-500 ' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='pl-3 text-white/80  text-xl font-medium' htmlFor="name">Product Description</label>
                        <textarea  ref={descriptionRef} type="text" className='w-[350px] px-2 py-2 h-[150px] rounded-2xl outline-purple-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='pl-3 text-white/80  text-xl font-medium' htmlFor="name">Product image</label>
                        <input placeholder='image link' ref={imgRef} type="text" className='w-[350px] px-2  py-2 rounded-2xl outline-purple-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='pl-3 text-white/80  text-xl font-medium' htmlFor="name">Product price</label>
                        <input ref={priceRef} pattern='[0-9]{2}' type="text" className='w-[350px] px-2  py-2 rounded-2xl outline-purple-500' />
                    </div>

                    <button onClick={handleSubmit} className='px-4 py-2 bg-purple-500 hover:cursor-pointer hover:bg-purple-600 rounded-full text-white/70 font-medium'>Add</button>
                </form>
            </section>
        </>
    )
}

export default AddProduct

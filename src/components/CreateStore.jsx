import React, { useRef, useState } from 'react'
import { verifyStore, addNewStore } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

function CreateStore() {

    const navigate = useNavigate();

    const [createStore, setCreateStore] = useState(false);
    const [hasStore, setHasStore] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    let storeRef = useRef();


    function havStore(){
        setHasStore(true)
    }



    function addStore (){
        setCreateStore(true)
    }





    async function verify(){
        if(storeRef.current.value.trim() == '') return;
        let storeName = storeRef.current.value.trim();
        let res = await verifyStore(storeName).catch((e)=>{
            setError(true);
            setErrorMsg(e)
        })

        if (res) {
            navigate('/add-product')
            
        }else {
            setError(true);
            setErrorMsg('store does not exist')
        }
        

    
    }


    function goBack(){
        if (hasStore)(
            setHasStore(prev => !prev)
        )
        if (createStore){
            setCreateStore(prev => !prev)
        }
        if(error){
            setError(false)
        }
        if(!error && !hasStore && !createStore){
            navigate('/')
        }
    }


    async function createNewStore(){
        if(storeRef.current.value.trim() == '') return;
        let storeName = storeRef.current.value.trim();
        let res = await addNewStore(storeName).catch((e)=>{
            setError(true)
            setErrorMsg(e)
        })

        if (res) {
            navigate('/add-product')
        }else {
            console.log('reached point')
            setError(true);
            setErrorMsg('store already exist')
        }
        
    }
    

    return (
        <section className='bgImg2 bg-cover  h-screen overflow-hidden flex flex-col justify-start items-center px-8'>

            <span onClick={goBack} className='absolute text-4xl top-0 left-0 p-8 hover:cursor-pointer hover:scale-110 duration-200'>
                ⬅️
            </span>

            { 
            (!createStore && !hasStore) && <div className='flex flex-col lg:flex-row p-4 gap-12 lg:gap-6  my-auto '>
                <button onClick={addStore} className='px-6 py-3  backdrop-blur-[2px] hover:backdrop-blur-lg duration-300 lg:text-4xl text-2xl rounded-full text-white/90 bg-black/10 shadow-inner shadow-white hover:bg-black/30'>
                    Create Store
                </button>

                <button onClick={havStore} className='px-6 py-4  backdrop-blur-[2px] hover:backdrop-blur-lg duration-300 text-2xl rounded-full text-white/90 bg-black/10 shadow-inner shadow-white lg:text-4xl hover:bg-black/30'>
                    Already have a Store
                </button> 
            </div>
            }


            {

            (hasStore && !error) && <div className='my-auto p-8 backdrop-blur-[2px] hover:backdrop-blur-lg duration-300  rounded-full text-white/90 bg-black/10 py-16 shadow-inner shadow-white hover:bg-black/30'>
                    <div className='flex flex-col gap-1 justify-center  '>
                        <label className='mx-auto pl-3 font-medium' htmlFor="name">Store Name</label>
                        <input ref={storeRef} type="text" className='w-[350px] px-2 py-2 rounded-2xl outline-purple-500 text-black' />
                        <button  onClick={verify} className='mx-auto bg-purple-500 rounded-full px-4 py-2 mt-6 text-white w-[300px]'>verify</button>
                    </div>
                </div>
            }


            {
                (createStore && !error) && <div className='my-auto p-8 backdrop-blur-[2px] hover:backdrop-blur-lg duration-300  rounded-full text-white/90 bg-black/10 py-16 shadow-inner shadow-white hover:bg-black/30'>
                    <div className='flex flex-col gap-1 justify-center  '>
                        <label className='mx-auto pl-3 font-medium' htmlFor="name">Store Name</label>
                        <input ref={storeRef} type="text" className='w-[350px] px-2 py-2 rounded-2xl outline-purple-500 text-black' />
                        <button  onClick={createNewStore} className='mx-auto bg-purple-500 rounded-full px-4 py-2 mt-6 text-white w-[300px]'>register store</button>
                    </div>
                </div>
            }


            {
                error && <div className='my-auto p-8 backdrop-blur-[2px] hover:backdrop-blur-lg duration-300  rounded-xl text-white/90  py-16   shadow-inner shadow-white hover:bg-black/30'>
                    <p  className='text-xl font-medium '>{errorMsg}</p>
                </div> 
                
            }


            
                
                
                
            </section>
    )
}

export default CreateStore

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../firebase/auth'



function Login() {

    const navigate = useNavigate()
    
    

    const [username, setUsername] = useState();
    const [ usernameIsValid, setUsernameIsValid] = useState(false);


    const [password, setPassword] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState(false);


    function handleUsername(e){
        setUsername(e.target.value)
        if(e.target.value.trim().length > 3){
            setUsernameIsValid(true)
        }else{
            setUsernameIsValid(false)
        }
        
    }

    function handlePassword(e){
        if(e.target.value.trim().length > 5){
            setPasswordIsValid(true)
        }else {
            setPasswordIsValid(false)
        }
        setPassword(e.target.value)
        
    }





    async function Login(e){
        e.preventDefault();

        if (username.trim() == ''){
            return;
        }

        if (password.trim() == ''){
            return;
        }

        let user = {
            username: username.trim(),
            password: password.trim()
        }

        try {
            
            let login = await verifyUser(username, password)
            if (login){
                setUsername('')
                setPassword('')
                navigate('/')
            }else{
                console.log('invalid credentials')
            }
            

        } catch (error) {
            
        }
    }

    function createAccount(){
        navigate('/create-account')
    }

    async function test (){
        e.preventDefault()
        const userRef = collection(db, 'users')
        const q = query(userRef, where("username", "==", "talha-054"));
    }


    return (
        <>
            <section className='bg-gray-200 h-screen overflow-hidden flex flex-col justify-start items-center p-8'>
                <h1 className='text-4xl black/70 font-bold'>Login</h1>
                <form action="" className='min-w-[350px] mt-14 flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='pl-3 font-medium' htmlFor="name">Username</label>
                        <input onChange={handleUsername} type="text" className={`w-[350px] px-2 py-2 rounded-2xl ${usernameIsValid? 'outline-green-500' : 'outline-red-500'}`}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='pl-3 font-medium' htmlFor="name">Password</label>
                        <input  onChange={handlePassword} type="text" className={`w-[350px] px-2 py-2  rounded-2xl ${passwordIsValid? 'outline-green-500' : 'outline-red-500'}`} />
                    </div>

                    <button onClick={createAccount} className='px-4 py-2 bg-purple-500 hover:cursor-pointer hover:bg-purple-600 rounded-full text-white/80 font-medium mt-28'>Create Account</button>
                    
                    <p className='w-[350px] text-black/50 text-center'>
                        OR
                    </p>

                    <button onClick={Login} className='px-4 py-2 bg-purple-500 hover:cursor-pointer hover:bg-purple-600 rounded-full text-white/80 font-medium '>Login</button>

                    
                </form>
            </section>
        </>
    )
}

export default Login

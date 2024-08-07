
import {app} from './config'

import {getDatabase, set, ref, get, child} from 'firebase/database'

const db = getDatabase();
const dbRef = ref(getDatabase());




export const verifyUser =  async (userN, pass)=>{
    try {
        let res = await get(child(dbRef, `users/${userN.slice(0,3)+pass.slice(0,3)}`))
        if (res.val()){
            let {username, password} = res.val();
            
            if(userN == username && password == pass){
                console.log('login successfull')
                localStorage.setItem("currUser",JSON.stringify({username: userN, password: pass}))
                return true;
            }else{
                console.log('no success login')
                return false;
            }
        }
        
    } catch (error) {
        console.log(error)
    }
} 

    

export const createUser = async (userN, pass)=> {

    let id = userN.slice(0,3) + pass.slice(0,3)
    
    try {
        await set(ref(db, 'users/' + id.trim()), {
            username: userN,
            password: pass
        });

        let user = {
            username: userN,
            password: pass
        }
        localStorage.setItem("currUser",JSON.stringify(user))
        console.log('user created success')
        
    } catch (error) {
        console.log('some error occured while creating account pls try again. error: ', error)
    }
}




export const verifyStore = async (store)=>{
    let username;
    let password;
    let user = await JSON.parse(localStorage.getItem("currUser"))
    
    if(user){
        username = user.username;
        password = user.password;
        
    }else{
        console.log('user credentials not found in local storage pls login again')
        return false;
    }

    try {
        let res = await get(child(dbRef, `users/${username?.slice(0,3)+password?.slice(0,3)}/${store}`))
        if(res.val()){
            console.log('store exist')
            
            let user = {
                username: username,
                password: password,
                store: store
            }
            localStorage.setItem("currUser", JSON.stringify(user))

            return true;
        }else{
            console.log("store does not exist")
            return false;
        }
    } catch (error) {
        console.log(error)
    }
}


export const storeExists = async()=>{
    let username;
    let password;
    let user = await JSON.parse(localStorage.getItem("currUser"))
    
    if(user){
        username = user.username;
        password = user.password;
        
    }else{
        console.log('user credentials not found in local storage pls login again')
        return false;
    }

    try {
        let res = await get(child(dbRef, `users/${username?.slice(0,3)+password?.slice(0,3)}/storeExist`))
        if(res.val()){
            console.log('store exist')
            return true;
        }else{
            console.log("stor does not exist")
            return false;
        }
    } catch (error) {
        console.log(error)
    }
}



export const addNewStore = async (store)=>{

    let storeExist = await storeExists()
    

    if(storeExist){
        console.log('1 store allowed per account')
        return false;
    }

    let alreadyHas = await verifyStore(store)
    if(alreadyHas){
        console.log('store already exist')
        return false
    }

    let username;
    let password;
    let user = JSON.parse(localStorage.getItem('currUser'))
    
    if (user){
        username = user.username;
        password = user.password;
        let userExist = await verifyUser(username,password)
        if (!userExist) return false
    }else {
        console.log("user creds not found in local storage pls login again")
        return false;
    }
    

    try {
        

        await set(ref(db, `users/${username?.slice(0,3)+password?.slice(0,3)}/${store}`),{
            store: true
        })

        await set(ref(db, `users/${username?.slice(0,3)+password?.slice(0,3)}/storeExist`),{
            store: true
        })

        console.log("store created successfully")

        let user = {
            username: username,
            password: password,
            store: store
        }
        localStorage.setItem("currUser", JSON.stringify(user))
        
        return true;
        
    } catch (error) {
        console.log(error)
        return false;
    }
}



export const addProduct = async (item)=>{
    let username;
    let password;
    let store;

    let user = JSON.parse(localStorage.getItem('currUser'))

    if (user){
        username = user.username,
        password = user.password,
        store = user.store;
    }else{
        console.log('user creds not found kiny login again')
        return false;
    }

    let storeExist = await (storeExists())
    if(!storeExist) return;

    

    let product = {
        name: item.name ,
        description: item.description ,
        img: item.img ,
        price: item.price  
    }
    

    
    

    try {

        let res = await get(child(dbRef,`users/${username?.slice(0,3)+password?.slice(0,3)}/${store}/products`));
        let products = res.val()

        await set(ref(db,`/users/${username?.slice(0,3)+password?.slice(0,3)}/${store}/products`),[
            ...products || '', product
        ])

        console.log('product added successfully')
        return false;
        
    } catch (error) {
        console.log('error while saving product....error is: ',error)
        return false;
    }
}



export const getAllProducts = async ()=>{
    try {
        let res = await get(child(dbRef,'/users'))
        let users = res.val()
        console.log(users)
        let arr = []
        let products = []
        
        for (let user in users){  
            arr.push(users[user])
        }
        console.log(arr)
        for (let obj of arr){
            for (let key in obj){
                if (key == 'username' || key == 'password' || key == 'storeExist'){
                    continue
                }else{
                    let items = obj[key].products
                    
                    let product = {store:key, products: [...items]}
                    products.push(product)
                }
            }
        }
        console.log( 'products are',products)
        users = ''
        return products
        
    } catch (error) {
        return []
    }
}





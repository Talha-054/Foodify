import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import productImg from '../assets/product.jpg'
import { getAllProducts } from '../firebase/auth'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'






function ProductArea() {

    let params = useParams()
    

    let [products, setProducts] = useState()
    let category = params.storeName

    useEffect(()=>{
        getAllProducts().then((res)=>{
            res.forEach((record)=>{
                record.store == category? setProducts(record.products): null
            })
            
        })
    },[category])

    

    

    

    

    
    return (
        <>
            <Header />
            <main className='bgImg2 bg-cover  pt-32 h-screen w-screen overflow-auto' >
                <section className='flex flex-col lg:flex-row justify-center items-center pb-12  flex-wrap gap-10'>



                    


                    
                    {products?.map((item, index)=>{
                        return (
                            <ItemCard key={item.name.toLowerCase()} 
                                      name={item.name} 
                                      description={item.description} 
                                      img={productImg} 
                                      price={item.price} />
                        )
                    })}
                </section>
                
            </main>
            
        </>
    )
}

export default ProductArea

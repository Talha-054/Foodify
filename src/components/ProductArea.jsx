import React, { useEffect } from 'react'
import ItemCard from './ItemCard'
import productImg from '../assets/product.jpg'
import { products } from '../products/products'



function ProductArea({category}) {

    

    let items = products[category]

    useEffect(()=>{
        console.log('product-Area-rendered')
    })

    

    return (
        <>
            <main className='bgImg2 py-12' >
                <section className='flex w-full flex-col lg:flex-row justify-center items-center  flex-wrap gap-10'>
                    {items.map((item, index)=>{
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

import { useState, createContext } from "react";


export const CartContext = createContext();


export default function CartContextProvider ({children}){
    const [cart, setCart] = useState([
        // {
        //     productId: '',
        //     name: '',
        //     description: '',
        //     price: '',
        //     quantity: ''
        // }
    ]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

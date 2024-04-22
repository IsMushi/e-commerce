import { createContext,useState } from "react";

const CartContext = createContext()

 const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const addToCart=(product)=>{
        setCart([...cart,product ])
    }
    const removeFromCart=(product)=>{
        setCart(cart.filter(item=>item.id!==product.id))
    }
    const clearCart=()=>{
        setCart([])
    }
    // const CartExists=(product)=>{
    //      setCart(cart.find(item=>item.id!==product.id))
    //      return {
    //         isstock: true,
    //      }
    // }
    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}
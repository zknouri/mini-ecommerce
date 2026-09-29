import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export default function useCartContext() {
    const context = useContext(CartContext);

    if(context === undefined){
        throw new Error('useContext must be used between <CartContextProvider>');
    }

    return context;
}
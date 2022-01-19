import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([])

    const addtoCart = (product, count) => {

        const index = cartArray.findIndex((i) => i.product.id === product.id);

        if (index > -1) {
            console.log('El producto ya se encuentra en el carrito.');
        } else {
            console.log(`Agregaste ${product.nombre}, cantidad: ${count}.`);
            const newObj = {
              item: product,
              count
            }
            setCartArray([...cartArray, {product, count}])
        }
    }
    

    const borrarItem = (id) => {
        const actualizarCart = cartArray.filter(el => el.product.id !== id)
        setCartArray(actualizarCart);
    }

    const borrarTodo = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(el => el.item.id === id)
    }

    const contadorProductos = () => {
        return cartArray.reduce((accum, item) => accum = accum + item.contador, 0)
    }

    const value = {
        cartArray,
        addtoCart,
        borrarItem,
        borrarTodo,
        contadorProductos
    }


    return (
        <CartContext.Provider value={{cartArray,
            addtoCart,
            borrarItem,
            borrarTodo,
            contadorProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


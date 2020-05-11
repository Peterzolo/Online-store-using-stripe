import React, { useState, createContext } from 'react'

export const CartContext = createContext(null)

const CartContextProvider = ({ children }) => {

    const [items, setItems] = useState([])

     
    const addToCart = (item) => {
        setItems(prevState => [...prevState, item])
    }

     
    const quantitiesItems = (items) => {
        return items.reduce((acc, item) => {
            const found = acc.find(singleItem => singleItem.sku === item.sku)
            if (found) {
                found.quantity = found.quantity + 1
            } else {
                acc.push({
                    quantity: 1,
                   ...item
                })
            }
            return acc
        }, [])
    }


    return (
        <CartContext.Provider value = {{items:quantitiesItems(items), addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
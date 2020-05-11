import React, { useState, useEffect,useContext } from 'react'

import {CartContext} from './context'

import './cart.css'


const formatPrice = (price) => {
    return `#${(price*0.01).toFixed(2)}`
}

const totalCost = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

const Cart = ({ stripeToken }) => {
    const [stripe, setStripe] = useState(null)
    const contxt = useContext(CartContext)

    useEffect(() => {
        if (window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])

    const payment = () => {
        stripe.redirectToCheckout({
            items: contxt.items.map(item => ({
                quantity: item.quantity,
                sku: item.sku
            })),

            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
        })
    }

    return (

        <div className="container" id ="cart-table">
            {contxt.items.map(item => (
            
            
                <div className="row">
                    
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th className ="table-head">Product Name</th>
                                <th className ="table-head">Product Image</th>
                                <th className ="table-head">Quantity</th>
                                <th className ="table-head">Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><p>{item.name}</p></td>
                                <td><img className="item-image" src={`/images/${item.sku}.jpg`} alt={item.name} width={150} />
                                 </td>
                                <td><div className="quantity">{item.quantity}</div></td>

                                <td><div className ="price">{formatPrice(item.price * item.quantity)}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    

                </div>


            
                ))}
           
            <div className="total-wrapper">
                <div className ="total">
                    <span className="total" colSpan={3}>Total</span>
                    <span className="total2">{formatPrice(totalCost(contxt.items))}</span>
                </div>

                <div className="payment">
                    
                    <div colSpan={4}>
                        <button className="payment-btn" onClick={payment}>Proceed To Payment</button>
                    </div>
                </div>
            </div>

<br></br>
<br></br>
        </div>

      
    )

}
export default Cart



import React, { useContext } from 'react'
import initialProducts from '../../resource/Products'
// import Cart from '../cart'
import { CartContext } from '../cart/context'


import './store.css'

const Store = () => {

    const newCartContext = useContext(CartContext)

    const formatPrice = (price) => {
        return `#${(price * 0.01).toFixed(2)}`
    }

    return (
        <div>

            {initialProducts.map(product => (

                <div className="container" id ="product-wrap">
                    <div className="row">
                        
                        <div className="col s12 m6">
                            <div className ="card">
                                <img src={`/images/${product.sku}.jpg`} alt={product.name} width={250} />
                                
                                <div className="product-name">{product.name}</div>

                                <div className="product-price">{formatPrice(product.price) }</div>

                                 <button className="add-to-cart" onClick={() => newCartContext.addToCart(product)}>Add to the Cart
                                           </button>
                            </div>
                            </div>


                        <div className=" card col s12 m6" id = "about-product">
                            <div className="product-head">  
                              About the product:    
                            </div>
                            <div className="product-detail">
                                Name :
                                 <br />
                                Brand :
                                <br />
                                Size:
                                <br />
                                Year Manufactured:
                                <br /> 
                                Color:
                                <br />
                                Quality:
                            </div>
                        </div>

                       

                    </div>

                </div>
            ))}
        </div>
    )


}

export default Store
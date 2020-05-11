import React from 'react'
import Layout from '../../components/layout/Layout'

import Store from '../../components/store'

import './products.css'

const productPage = () => {
    return (
        <div className = "products-page">
            <Layout title="">
                <div className ="container">
                      <Store /> 
                </div>
           
             </Layout>
        </div>
       
    )
}

export default productPage

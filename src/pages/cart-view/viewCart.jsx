import React from 'react'
import Layout from '../../components/layout/Layout'
import Cart from "../../components/cart/index"

const viewCart = () => {
    return (
        <Layout title = "NuspringStores.Com">
            <Cart stripeToken="pk_test_CEafmnDhy4mcJwrFtlCHf2VK00eo9VAg9Q" />
        </Layout>
    )
}

export default viewCart

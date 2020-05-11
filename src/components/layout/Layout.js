import React from 'react'

import TopBar from '../top-bar/TopBar'
import Footer from '../footer/Footer'

const Layout = ({title, children}) => {
    document.getElementsByTagName("title")[0].innerHTML = title
    return (
        <>
            <TopBar />
            <div className="">
                <h5>{title}</h5>
                <div className ="layout">
                   {children} 
                </div>  
            </div>
            <Footer />
        </>
    );
}

export default Layout

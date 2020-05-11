import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import {CartContext}  from "../cart/context"

import './top-bar.css'


const TopBar = () => {
    const cartCont = useContext(CartContext);
    const itemNum = cartCont.items.length;
    return (
   <>
        <div className="navbar-fixed">
            <nav className="black">
                <div className="container">
                    <div className="nav-wrapper">
                        <div  className="brand-logo">NuspringStores.com</div>
                        <div  data-target="mobile-nav"
                            className ="sidenav-trigger">
                            <i className="materiali-icons"></i></div>
                            <ul className="right hide-on-med-and-down">
                                
                                   <li className="nav-item">
                                    <div className="nav-link">About Us</div>
                                      </li>

                            
                           

                                
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Products</NavLink> 
                             </li>
                            
                            <li className="nav-item">
                                <NavLink to="/viewCart" className="nav-link">
                                        <span>Click To</span>&nbsp;
                                    <span className>View The</span>
                                        <i className="fas fa-shopping-cart" id="basket"></i>&nbsp; &nbsp;
                                    ({itemNum})</NavLink>
                            </li>
                          
                           
                          
                        </ul>
                        
                       
                    </div>
                    
                </div>
                
            </nav>
            </div>

            <ul className="sidenav" id ="mobile-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Products</NavLink> ||
                             </li>

                <li className="nav-item">
                    <NavLink to="/viewCart" className="nav-link">
                        <span>Click To</span> &nbsp; 
                        <span className> View the</span>
                        <i className="fas fa-shopping-cart"></i>
                        ({itemNum})</NavLink>
                </li>
            </ul>

      </>
        
                )
            }
            
export default TopBar
            
           
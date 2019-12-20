import React from 'react' 

import logoImg from '../../img/logo.png' 

const TopNav = () => (
<header className='header_area'>
    <div className='top_menu row m0'>
        <div className="container-fluid">
            <div className="float-left">
                <p>Call Us: 012 44 5698 7456 896</p>
            </div>
            <div className="float-right">
                <ul className="right_side">
                    <li>
                        <a href="login.html">
                                    Login/Register
                                </a>
                    </li>
                    <li>
                        <a href="#">
                                    My Account
                                </a>
                    </li>
                    <li>
                        <a href="contact.html">
                                    Contact Us
                                </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
            <a className="navbar-brand logo_h" href="index.html">
                <img src={logoImg} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div className='navbar-collapse offset collapse'>
                <div className='row w-100'>
                    <div className="col-lg-7 pr-0">
                        <ul className="nav navbar-nav center_nav pull-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item submenu dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="category.html">Shop Category</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="single-product.html">Product Details</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="checkout.html">Product Checkout</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="cart.html">Shopping Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="confirmation.html">Confirmation</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item submenu dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="blog.html">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="single-blog.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item submenu dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="login.html">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="tracking.html">Tracking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="elements.html">Elements</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5">
                    <ul className="nav navbar-nav navbar-right right_nav pull-right">
                        <hr />
                        <li className="nav-item">
                            <a href="#" className="icons">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </a>
                        </li>

                        <hr />

                        <li className="nav-item">
                            <a href="#" className="icons">
                                <i className="fas fa-user" aria-hidden="true"></i>
                            </a>
                        </li>

                        <hr />

                        <li className="nav-item">
                            <a href="#" className="icons">
                                <i className="far fa-heart" aria-hidden="true"></i>
                            </a>
                        </li>

                        <hr />

                        <li className="nav-item">
                            <a href="#" className="icons">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </li>

                        <hr />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
) 
    
export default TopNav
import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../img/logo.png'
import routes from '@/utilities/routes'
import HeaderTop from './HeaderTop'

const TopNav = () => (
  <header className='header_area'>
    <HeaderTop />
    <div className='main_menu'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand logo_h' to={routes.home}>
            <img src={logoImg} alt='' />
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <div className='collapse navbar-collapse offset'>
            <div className='row w-100'>
              <div className='col-lg-7 pr-0'>
                <ul className='nav navbar-nav center_nav pull-right'>
                  <li className='nav-item active'>
                    <Link className='nav-link' to={routes.home}>Home</Link>
                  </li>
                  <li className='nav-item submenu dropdown'>
                    <Link to='#' className='nav-link dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Shop</Link>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link className='nav-link' to={routes.category}>Shop Category</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' to={routes.productDetails}>Product Details</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' to={routes.checkout}>Product Checkout</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' to={routes.cart}>Shopping Cart</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' to='confirmation.html'>Confirmation</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item submenu dropdown'>
                    <Link to='#' className='nav-link dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Blog</Link>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link className='nav-link' to='blog.html'>Blog</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' to='single-blog.html'>Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to={routes.contact}>Contact</Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-5'>
                <ul className='nav navbar-nav navbar-right right_nav pull-right'>
                  <hr />
                  <li className='nav-item'>
                    <Link to='#' className='icons'>
                      <i className='fas fa-search' aria-hidden='true' />
                    </Link>
                  </li>

                  <hr />

                  <li className='nav-item'>
                    <Link to='#' className='icons'>
                      <i className='fas fa-user' aria-hidden='true' />
                    </Link>
                  </li>

                  <hr />

                  <li className='nav-item'>
                    <Link to='#' className='icons'>
                      <i className='far fa-heart' aria-hidden='true' />
                    </Link>
                  </li>

                  <hr />

                  <li className='nav-item'>
                    <Link to='#' className='icons'>
                      <i className='fa fa-shopping-cart' />
                    </Link>
                  </li>

                  <hr />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

export default TopNav
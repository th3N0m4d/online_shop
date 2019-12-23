import React from 'react'
import { Link } from 'react-router-dom'

import routes from '@/utilities/routes'

const ProductDetails = () => (
  <>
    <section className='banner_area'>
      <div className='banner_inner d-flex align-items-center'>
        <div className='container'>
          <div className='banner_content text-center'>
            <h2>Single Product Page</h2>
            <div className='page_link'>
              <Link to={routes.home}>Home</Link>
              <Link to={routes.productsCategory}>Category</Link>
              <Link to={routes.productDetails}>Product Details</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='product_image_area'>
      <div className='container'>
        <div className='row s_product_inner'>
          <div className='col-lg-6'>
            <div className='s_product_img'>
              <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                <ol className='carousel-indicators'>
                  <li data-target='#carouselExampleIndicators' data-slide-to='0' className=''>
                    <img src='img/product/single-product/s-product-s-2.jpg' alt='' />
                  </li>
                  <li data-target='#carouselExampleIndicators' data-slide-to='1' className=''>
                    <img src='img/product/single-product/s-product-s-3.jpg' alt='' />
                  </li>
                  <li data-target='#carouselExampleIndicators' data-slide-to='2' className='active'>
                    <img src='img/product/single-product/s-product-s-4.jpg' alt='' />
                  </li>
                </ol>
                <div className='carousel-inner'>
                  <div className='carousel-item'>
                    <img className='d-block w-100' src='img/product/single-product/s-product-1.jpg' alt='First slide' />
                  </div>
                  <div className='carousel-item'>
                    <img className='d-block w-100' src='img/product/single-product/s-product-1.jpg' alt='Second slide' />
                  </div>
                  <div className='carousel-item active'>
                    <img className='d-block w-100' src='img/product/single-product/s-product-1.jpg' alt='Third slide' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 offset-lg-1'>
            <div className='s_product_text'>
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul className='list'>
                <li>
                  <a className='active' href='#'>
                    <span>Category</span> : Household
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Availibility</span> : In Stock
                  </a>
                </li>
              </ul>
              <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that
can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.
              </p>
              <div className='product_count'>
                <label for='qty'>Quantity:</label>
                <input type='text' name='qty' id='sst' maxlength='12' value='1' title='Quantity:' className='input-text qty' />
                <button className='increase items-count' type='button'>
                  <i className='lnr lnr-chevron-up' />
                </button>
                <button className='reduced items-count' type='button'>
                  <i className='lnr lnr-chevron-down' />
                </button>
              </div>
              <div className='card_area'>
                <a className='main_btn' href='#'>Add to Cart</a>
                <a className='icon_btn' href='#'>
                  <i className='lnr lnr lnr-diamond' />
                </a>
                <a className='icon_btn' href='#'>
                  <i className='lnr lnr lnr-heart' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ProductDetails

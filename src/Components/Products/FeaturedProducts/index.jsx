import React from 'react'

import featuredProduct01 from '../../../img/product/feature-product/f-p-1.jpg'
import featuredProduct02 from '../../../img/product/feature-product/f-p-2.jpg'
import featuredProduct03 from '../../../img/product/feature-product/f-p-3.jpg'
import featuredProduct04 from '../../../img/product/feature-product/f-p-4.jpg'
import featuredProduct05 from '../../../img/product/feature-product/f-p-5.jpg'
import FeaturedProduct from '../FeaturedProduct'

const products = [
  { id: 1, img: featuredProduct01, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 2, img: featuredProduct02, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 3, img: featuredProduct03, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 4, img: featuredProduct04, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 5, img: featuredProduct05, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 6, img: featuredProduct01, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 7, img: featuredProduct03, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 8, img: featuredProduct04, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 9, img: featuredProduct05, title: 'Long Sleeve TShirt', price: '$150.00' },
  { id: 10, img: featuredProduct03, title: 'Long Sleeve TShirt', price: '$150.00' }
]

const FeaturedProducts = () => (
  <section className='feature_product_area section_gap'>
    <div className='main_box'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='main_title'>
            <h2>Featured Products</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className='row'>
          {
            products.map(item => <FeaturedProduct key={item.id} {...item} />)
          }
        </div>
        <div className='row'>
          <nav className='cat_page mx-auto' aria-label='Page navigation example'>
            <ul className='pagination'>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  <i className='fa fa-chevron-left' aria-hidden='true' />
                </a>
              </li>
              <li className='page-item active'>
                <a className='page-link' href='#'>01</a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>02</a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>03</a>
              </li>
              <li className='page-item blank'>
                <a className='page-link' href='#'>...</a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>09</a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  <i className='fa fa-chevron-right' aria-hidden='true' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturedProducts

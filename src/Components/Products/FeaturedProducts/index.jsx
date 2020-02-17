import React from 'react'

import featuredProduct01 from 'images/product/feature-product/f-p-1.jpg'
import featuredProduct02 from 'images/product/feature-product/f-p-2.jpg'
import featuredProduct03 from 'images/product/feature-product/f-p-3.jpg'
import featuredProduct04 from 'images/product/feature-product/f-p-4.jpg'
import featuredProduct05 from 'images/product/feature-product/f-p-5.jpg'
import FeaturedProduct from '../FeaturedProduct'
import Pagination from '../../Pagination'

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
        <Pagination />
      </div>
    </div>
  </section>
)

export default FeaturedProducts

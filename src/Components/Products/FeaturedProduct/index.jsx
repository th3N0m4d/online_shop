import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProduct = ({ id, img, title, price }) => (
  <div className='col col1' key={id}>
    <div className='f_p_item'>
      <div className='f_p_img'>
        <img className='img-fluid' src={img} alt='' />
        <div className='p_icon'>
          <a href='#'>
            <i className='far fa-heart' />
          </a>
          <a href='#'>
            <i className='fas fa-shopping-cart' />
          </a>
        </div>
      </div>
      <Link to='#'>
        <h4>{title}</h4>
      </Link>
      <h5>{price}</h5>
    </div>
  </div>
)

export default FeaturedProduct

import React from 'react'

import photo01 from '../../../img/product/single-product/review-1.png'
import photo02 from '../../../img/product/single-product/review-2.png'
import photo03 from '../../../img/product/single-product/review-3.png'
import UserReview from './UserReview'

const reviews = [
  {
    id: 0, photo: photo01, name: 'John Doe', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo`
  },
  {
    id: 1, photo: photo02, name: 'Peter Pan', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo`
  },
  {
    id: 2, photo: photo03, name: 'Brunce Springstein', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo`
  }
]
const Reviews = () => (
  <div class='review_list'>
    {
      reviews.map(review => <UserReview {...review} key={review.id} />)
    }
  </div>
)

export default Reviews

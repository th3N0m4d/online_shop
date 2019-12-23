import React from 'react'

const UserReview = ({ id, photo, name, description }) => (
  <div class='review_item' key={id}>
    <div class='media'>
      <div class='d-flex'>
        <img src={photo} alt='' />
      </div>
      <div class='media-body'>
        <h4>{name}</h4>
        <i class='fa fa-star' />
        <i class='fa fa-star' />
        <i class='fa fa-star' />
        <i class='fa fa-star' />
        <i class='fa fa-star' />
      </div>
    </div>
    <p>
      {description}
    </p>
  </div>
)

export default UserReview

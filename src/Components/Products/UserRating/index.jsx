import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import { MaxRatingMessage } from './Atoms'
import Star from './Star'

export const MAX_RATING = 5
const propTypes = {
  rating: PropTypes.number,
  onClick: PropTypes.func
}

const UserRating = ({ rating, onClick }) => (
  <>
    <ul className='list'>
      {
        [1, 2, 3, 4, 5].map((id, index) => (
          <Star key={id} id={id} onClick={onClick} selected={R.gte(rating, id)} />
        ))
      }
    </ul>
    {
      R.equals(rating, MAX_RATING) && <MaxRatingMessage>Outstanding</MaxRatingMessage>
    }
  </>
)

UserRating.propTypes = propTypes

export default UserRating

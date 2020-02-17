import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StarIcon = ({ selected }) => (
  selected
    ? <FontAwesomeIcon icon={['fas', 'star']} style={{ color: '#fbd600' }} />
    : <FontAwesomeIcon icon={['far', 'star']} style={{ color: '#fbd600' }} />
)

const propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
  selected: PropTypes.bool
}

const Star = ({ id, onClick, selected }) => (
  <li id={id} onClick={() => onClick(id)}>
    <StarIcon selected={selected} />
  </li>
)

Star.propTypes = propTypes

export default Star

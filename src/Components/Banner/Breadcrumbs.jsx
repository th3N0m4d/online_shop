import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const propTypes = {
  pageLinks: PropTypes.arrayOf(
    PropTypes.shape({
      routeName: PropTypes.string,
      route: PropTypes.string
    })
  )
}

const defaultProps = {
  pageLinks: []
}

const Breadcrumbs = ({ pageLinks }) => (
  <div className='page_link'>
    {
      pageLinks.map(({ name, route }) => <Link to={route} key={name}>{name}</Link>)
    }
  </div>
)

Breadcrumbs.propTypes = propTypes
Breadcrumbs.defaultProps = defaultProps

export default Breadcrumbs

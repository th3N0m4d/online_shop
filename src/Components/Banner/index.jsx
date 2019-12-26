import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from './Breadcrumbs'

const propTypes = {
  header: PropTypes.string,
  pageLinks: PropTypes.arrayOf(
    PropTypes.shape({
      routeName: PropTypes.string,
      route: PropTypes.string
    })
  )
}

const defaultProps = {
  header: '',
  pageLinks: []
}

const Banner = ({ header, pageLinks }) => (
  <section className='banner_area'>
    <div className='banner_inner d-flex align-items-center'>
      <div className='overlay' />
      <div className='container'>
        <div className='banner_content text-center'>
          <h2>{header}</h2>
          <Breadcrumbs pageLinks={pageLinks} />
        </div>
      </div>
    </div>
  </section>
)

Banner.propTypes = propTypes
Banner.defaultProps = defaultProps

export default Banner

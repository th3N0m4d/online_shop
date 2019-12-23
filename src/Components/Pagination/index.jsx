import React from 'react'

const Pagination = () => (
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
)

export default Pagination

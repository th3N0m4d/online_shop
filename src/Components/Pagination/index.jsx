import React from 'react'

const Pagination = () => (
  <div class='row'>
    <nav class='cat_page mx-auto' aria-label='Page navigation example'>
      <ul class='pagination'>
        <li class='page-item'>
          <a class='page-link' href='#'>
            <i class='fa fa-chevron-left' aria-hidden='true' />
          </a>
        </li>
        <li class='page-item active'>
          <a class='page-link' href='#'>01</a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>02</a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>03</a>
        </li>
        <li class='page-item blank'>
          <a class='page-link' href='#'>...</a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>09</a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>
            <i class='fa fa-chevron-right' aria-hidden='true' />
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Pagination

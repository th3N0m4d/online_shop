import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { BrowserRouter } from 'react-router-dom'

import Banner from '.'

export default {
  title: 'Banner',
  decorators: [withKnobs]
}

const pageLinks = [
  {
    name: 'First level',
    route: '#/'
  },
  {
    name: 'Second level',
    route: '#/'
  }
]

export const reviewForm = () => (
  <BrowserRouter>
    <Banner header={text('header', 'Home')} pageLinks={pageLinks} />
  </BrowserRouter>
)

import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

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

export const reviewForm = () => <Banner header={text('header', 'Home')} pageLinks={pageLinks} />

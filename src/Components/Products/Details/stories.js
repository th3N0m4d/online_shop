import React from 'react'
import { action } from '@storybook/addon-actions'

import ReviewForm from './ReviewForm'

export default {
  title: 'Reviews',
  decorators: [storyFn => <div className='col-lg-6'>{storyFn()}</div>]
}

export const reviewForm = () => <ReviewForm onSubmit={action('onSubmit')} />

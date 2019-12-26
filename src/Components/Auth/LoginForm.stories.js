import React from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter } from 'react-router-dom'

import LoginForm from './LoginForm'

export default {
  title: 'Auth',
  decorators: [storyFn => <div className='col-lg-6'>{storyFn()}</div>]
}

export const loginForm = () => (
  <BrowserRouter>
    <LoginForm onSubmit={action('onSubmit')} />
  </BrowserRouter>
)

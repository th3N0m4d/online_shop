import React from 'react'
import { action } from '@storybook/addon-actions'

import LoginForm from './LoginForm'

export default {
  title: 'Auth',
  decorators: [storyFn => <div className='col-lg-6'>{storyFn()}</div>]
}

export const loginForm = () => <LoginForm onSubmit={action('onSubmit')} />

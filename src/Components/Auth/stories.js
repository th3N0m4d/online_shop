import React from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter } from 'react-router-dom'

import LoginForm from './LoginForm'
import LoginPage from './LoginPage'
import RegisterForm from './RegisterForm'
import RegisterPage from './RegisterPage'

export default {
  title: 'Auth',
  decorators: [storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>]
}

export const loginForm = () => <LoginForm onSubmit={action('onSubmit')} />

export const loginPage = () => <LoginPage />

export const registerForm = () => <RegisterForm onSubmit={action('onSubmit')} />

export const registerPage = () => <RegisterPage />

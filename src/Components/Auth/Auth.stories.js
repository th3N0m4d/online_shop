import React from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter } from 'react-router-dom'

import LoginForm from './LoginForm'
import Login from './Login'
import RegisterForm from './RegisterForm'
import Register from './Register'

export default {
  title: 'Auth',
  decorators: [storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>]
}

export const loginForm = () => <LoginForm onSubmit={action('onSubmit')} />

export const loginPage = () => <Login />

export const registerForm = () => <RegisterForm onSubmit={action('onSubmit')} />

export const registerPage = () => <Register />

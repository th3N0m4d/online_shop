import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { BrowserRouter } from 'react-router-dom'

import TopNav from '.'

export default {
  title: 'TopNav'
}

export const toggleButton = () => (
  <BrowserRouter>
    <TopNav onToggle={action('onToggle')} />
  </BrowserRouter>
)

export const toggleMenu = () => (
  <BrowserRouter>
    <TopNav visible={boolean('visible')} />
  </BrowserRouter>
)

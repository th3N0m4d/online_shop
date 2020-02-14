import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/scss/style.scss'
import '../public/responsive.css'
import '../public/vendors/linericon/style.css'

import App from '@/components/App'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)

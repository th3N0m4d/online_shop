import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss'
import './responsive.css'

import App from './Components/App'

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('app')
)

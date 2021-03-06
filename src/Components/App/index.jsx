import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TopNav from '@/components/TopNav'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import LoginPage from '@/components/Auth/LoginPage'

import routes from '@/utilities/routes'
import RegisterPage from '@/components/Auth/RegisterPage'
import ContactUs from '@/components/ContactUs'
import ProductDetails from '@/components/Products/Details'

const App = () => (
  <>
    <TopNav />
    <Switch>
      <Route path={routes.login}>
        <LoginPage />
      </Route>
      <Route path={routes.register}>
        <RegisterPage />
      </Route>
      <Route path={routes.contact}>
        <ContactUs />
      </Route>
      <Route path={routes.productDetails}>
        <ProductDetails />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </>
)

export default App

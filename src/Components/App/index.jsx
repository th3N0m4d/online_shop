import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TopNav from '../TopNav'
import Home from '../Home'
import Footer from '../Footer'
import Login from '../Auth/Login'

import routes from '@/utilities/routes'
import Register from '../Auth/Register'

const App = () => (
  <>
    <TopNav />
    <Switch>
      <Route path={routes.login}>
        <Login />
      </Route>
      <Route path={routes.register}>
        <Register />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </>
)

export default App

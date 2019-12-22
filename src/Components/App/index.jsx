import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TopNav from '../TopNav'
import Home from '../Home'
import Footer from '../Footer'

const App = () => (
  <>
    <TopNav />
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </>
)

export default App

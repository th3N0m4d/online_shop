import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TopNav from '../TopNav'
import Home from '../Home'

const App = () => (
    <>
    <TopNav />
    <Switch>
        <Route path='/'>
            <Home />
        </Route>
    </Switch>
    </>
)

export default App


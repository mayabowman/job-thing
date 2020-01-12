import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/LogIn'
import JobList from './pages/JobList'

function App() {
  return (
    <main className='App'>
      <Nav />
      <section className='content'>
        <Switch>
          <>
            <Route
              exact path='/'
              component={Landing}
            />
            <Route
              path='/register'
              component={Register}
            />
            <Route
              path='/login'
              component={Login}
            />
            <Route
              path='/joblist'
              component={JobList}
            />
          </>
        </Switch>
      </section>
    </main>
  )
}

export default App

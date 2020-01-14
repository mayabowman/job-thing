import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/LogIn'
import JobList from './pages/JobList'
import JobDetails from './pages/JobDetails'
import AddListing from './pages/AddListing'
import EditListing from './pages/EditListing'
import Footer from './components/Footer'

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
            <Route
              path='/jobdetails/:id'
              component={JobDetails}
            />
            <Route
              path='/addlisting'
              component={AddListing}
            />
            <Route
              path='/editlisting'
              component={EditListing}
            />
          </>
        </Switch>
      </section>
      <Footer />
    </main>
  )
}

export default App

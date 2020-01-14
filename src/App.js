import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/LogIn';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import AddListing from './components/AddListing';
import EditListing from './components/EditListing';
import Footer from './components/Footer';

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

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import JobList from './components/JobList/JobList';
import JobDetails from './components/JobDetails/JobDetails';
import AddListing from './components/AddListing/AddListing';
import EditListing from './components/EditListing/EditListing';
import Footer from './components/Footer/Footer';

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
              component={LogIn}
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

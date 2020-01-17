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
import UpdateJobContext from './contexts/UpdateJobContext';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  static contextType = UpdateJobContext

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      jobs: [],
      singleJob: [],
      userId: 1,
      userData: []
    }
  }

  setJobs = (data) => {
    this.setState({
      jobs: data
    })
  }

  setSingleJob = (data) => {
    this.setState({
      singleJob: data
    })
  }

  setUserData = (data) => {
    this.setState({
      userData: data
    })
  }

  setError = (error) => {
    this.setState({
      error: error
    })
  }

  deleteJob = (id) => {
    const updatedJobs = this.state.jobs.filter(j => {
      return j.id !== id
    })
    this.setState({
      jobs: updatedJobs
    })
  }

  render() {

    const contextValue = {
      jobs: this.state.jobs,
      deleteJob: this.deleteJob,
      setJobs: this.setJobs,
      singleJob: this.state.singleJob,
      setSingleJob: this.setSingleJob,
      setError: this.setError,
      userId: this.state.userId,
      userData: this.state.userData,
      setUserData: this.setUserData,
      testContext: this.testContext
    }

    return (
      <UpdateJobContext.Provider value={contextValue}>
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
      </UpdateJobContext.Provider>
    )
  }
}

export default App;

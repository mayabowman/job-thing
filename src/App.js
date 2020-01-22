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
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import PrivateRoute from './utilities/PrivateRoute';

class App extends React.Component {
  static contextType = UpdateJobContext

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      jobs: [],
      singleJob: [],
      userId: 1,
      userData: [],
      sideDrawerOpen: false
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this)
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  setJobs = (data) => {
    this.setState({
      jobs: data
    })
  }

  setSingleJob = (data) => {
    let index
    this.state.jobs.forEach((item, i) => {
      if (item.id === data.id) {
        index = i
      }
    })
    let jobs = this.state.jobs
    jobs[index] = data
    this.setState({
      jobs: jobs,
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

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    };

    return (
      <UpdateJobContext.Provider value={contextValue}>
        <main className='App'>
          <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            toggle={this.drawerToggleClickHandler}
          />
          {backdrop}
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
                <PrivateRoute
                  path='/joblist'
                  component={JobList}
                />
                <Route
                  path='/jobdetails/:id'
                  component={JobDetails}
                />
                <PrivateRoute
                  path='/addlisting'
                  component={AddListing}
                />
                <Route
                  path='/editlisting/:id'
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

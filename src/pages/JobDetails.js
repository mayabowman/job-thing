import React from 'react'
import { Link } from 'react-router-dom'
import dummyStore from '../dummy-store'

class JobDetails extends React.Component{
  render() {
    const jobs = dummyStore.jobs
    console.log('jobs', jobs)
    return (
      <div>
        <div className='JobListing'>
          <h2>{jobs.company}</h2>
          <h3>{jobs.position}</h3>
          <p>{jobs.description}</p>
          <Link to='/editlisting'>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default JobDetails
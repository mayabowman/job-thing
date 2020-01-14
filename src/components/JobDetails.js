import React from 'react';
import { Link } from 'react-router-dom';
import dummyStore from '../dummy-store';

class JobDetails extends React.Component{
  render() {
    const jobs = dummyStore.jobs
    const jobId = this.props.match.params.id

    return (
      <div>
        <div className='JobListing'>
          <h2>{jobs[jobId -1].company}</h2>
          <h3>{jobs[jobId -1].position}</h3>
          <p>Description: {jobs[jobId -1].description}</p>
          <p>Status: {jobs[jobId -1].status}</p>
          <Link to='/editlisting'>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default JobDetails;
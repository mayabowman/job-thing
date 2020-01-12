import React from 'react'
import JobListing from '../components/JobListing'
import dummyStore from '../dummy-store'

class JobList extends React.Component {
  render() {
    const jobs = dummyStore.jobs
    let jobList = Object.keys(jobs).map((job, i) => (
      <JobListing key={i} id={i} job={jobs[job]} />
    ))
    return (
      <div>
        <h1>Jobs You've Applied For</h1>
        <ul>
          {jobList}
        </ul>
      </div>
    )
  }
}

export default JobList
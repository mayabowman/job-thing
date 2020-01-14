import React from 'react'
import dummyStore from '../dummy-store'
import JobListing from './JobListing'

class JobList extends React.Component {
  render() {
    const jobs = dummyStore.jobs

    return (
      <div>
        <h1>Jobs You've Applied For</h1>
        <ul>
          {jobs.map(i => (
            <li key={i.id}>
              <JobListing
                id={i.id}
                data={i}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default JobList

// render() {
//   const jobs = dummyStore.jobs
//   let jobList = Object.keys(jobs).map((job, i) => (
//       <JobListing key={i} id={i} job={jobs[job]} />
//   ))
//   return (
//     <div>
//       <h1>Jobs You've Applied For</h1>
//       <ul>
//         {jobList}
//       </ul>
//     </div>
//   )
// }

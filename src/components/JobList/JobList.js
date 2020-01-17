import React from 'react';
// import dummyStore from '../../dummy-store';
import JobListing from '../JobListing/JobListing';
import UpdateJobContext from '../../contexts/UpdateJobContext';
import JobsApiService from '../../services/jobs-api-service';
import TokenService from '../../services/token-service';

class JobList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  static contextType = UpdateJobContext

  componentDidMount() {
    let userId = Number(TokenService.getUserId())
    JobsApiService.getDataForUser(userId)
      .then(data => {
        this.context.setJobs(data)
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  render() {
    // const jobs = dummyStore.jobs
    return (
      <div>
        <h1>Jobs You've Applied For</h1>
        <ul>
          {this.context.jobs.map(i => (
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

export default JobList;



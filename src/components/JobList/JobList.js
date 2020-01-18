import React from 'react';
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
    JobsApiService.getJobsForUser(userId)
      .then(data => {
        console.log('data', data)
        this.context.setJobs(data)
        console.log('this.context.jobs', this.context.jobs)
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Jobs You've Applied For</h1>
        {/* <ul>
          {this.context.jobs.map(i => (
            <li key={i.id}>
              <JobListing
                id={i.id}
                data={i}
              />
            </li>
          ))}
        </ul> */}
      </div>
    )
  }
}

export default JobList;



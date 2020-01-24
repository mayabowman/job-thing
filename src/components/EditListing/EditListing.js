import React from 'react';
import UpdateJobContext from '../../contexts/UpdateJobContext';
import JobsApiService from '../../services/jobs-api-service';
import TokenService from '../../services/token-service';
import './EditListing.css';

class EditListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
    this.updateJob = this.updateJob.bind(this)
  }

  static contextType = UpdateJobContext

  componentDidMount() {
    let id = this.props.match.params.id
    JobsApiService.getJobById(id)
      .then(data => {
        this.context.setSingleJob(data)
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  updateJob = (e) => {
    e.preventDefault()
    const userId = Number(TokenService.getUserId())
    const id = this.props.match.params.id
    const { company, position, status, description } = e.target
    let updatedJob = {}

    if (company.value !== '' && company.value !== null) {
      updatedJob.company = company.value
    }

    if (position.value !== '' && position.value !== null) {
      updatedJob.position = position.value
    }

    if (status.value !== '' && status.value !== null) {
      updatedJob.status = status.value
    }

    if (description.value !== '' && description.value !== null) {
      updatedJob.description = description.value
    }

    updatedJob.id = id

    JobsApiService.updateJob(id, updatedJob)
    JobsApiService.getJobsForUser(userId)
      .then(data => {
        this.context.setJobs(data)
      })
      .then(() => {
        this.props.history.push(`/jobdetails/${id}`)
      })
      .catch(error => {
        this.context.setError(error)
      })
  }

  render() {
    console.log('singleJob', this.context.singleJob)
    const j = this.context.singleJob
    return (
      <div className='EditListing'>
        <h2>Edit a Job Listing</h2>
        <form className='edit-listing-form' onSubmit={(e) => this.updateJob(e)}>
          <div>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              id='company'
              value={j.company}
            ></input>
          </div>
          <div>
            <label htmlFor='position'>Position</label>
            <input
              type='text'
              name='position'
              id='position'
              value={j.position}
            ></input>
          </div>
          <div>
            <label htmlFor='status'>Status</label><br/>
            <select defaultValue={j.status} name='status'>
              <option value=''></option>
              <option value='Application submitted'>Application submitted</option>
              <option value='Phone Interview Scheduled'>Phone Interview Scheduled</option>
              <option value='Phone Interview Completed'>Phone Interview Completed</option>
              <option value='On Site Interview Scheduled'>On Site Interview Scheduled</option>
              <option value='On Site Interview Completed'>On Site Interview Completed</option>
              <option value='Hired!'>Hired!</option>
              <option value='Not Hired'>Not Hired</option>
            </select>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              name='description'
              id='description'
              value={j.description}
            ></input>
          </div>
          <div className='update__button'>
            <button type='submit' value='Update Listing' className='update-button'>
              Update Listing
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditListing;
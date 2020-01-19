import React from 'react';
import UpdateJobContext from '../../contexts/UpdateJobContext';
import JobsApiService from '../../services/jobs-api-service';

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
    const id = this.props.match.params.id
    const { company, position, status, description, date_submitted } = e.target
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

    if (date_submitted.value !== '' && date_submitted.value !== null) {
      updatedJob.date_submitted = date_submitted.value
    }

    updatedJob.id = id

    JobsApiService.updateJob(id, updatedJob)
      .then(data => {
        JobsApiService.getData()
          .then(data => {
            this.context.setJobs(data)
          })
      })
      .then(() => {
        this.props.history.push(`/jobdetails/${id}`)
      })
      .catch(error => {
        this.context.setError(error)
      })
  }

  render() {
    return (
      <div className='EditListing'>
        <h2>Edit a Job Listing</h2>
        <form>
          <div>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              id='company'
              placeholder={this.context.singleJob.company}
            ></input>
          </div>
          <div>
            <label htmlFor='position'>Position</label>
            <input
              type='text'
              name='position'
              id='position'
              placeholder={this.context.singleJob.position}
            ></input>
          </div>
          <div>
            <label htmlFor='status'>Status</label>
            <select>
              <option value={this.context.singleJob.status}></option>
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
              placeholder={this.context.singleJob.description}
            ></input>
          </div>
          <div>
            <label htmlFor='date-submitted'>Date Submitted</label>
            <input type='date' name='date-submitted'></input>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>
      </div>
    )
  }
}

export default EditListing;
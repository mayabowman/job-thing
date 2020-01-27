import React from 'react';
import UpdateJobContext from '../../contexts/UpdateJobContext';
import JobsApiService from '../../services/jobs-api-service';
import TokenService from '../../services/token-service';
import './AddListing.css';

class AddListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
    this.addJob = this.addJob.bind(this)
  }

  static contextType = UpdateJobContext

  addJob = (e) => {
    e.preventDefault()
    const userId = Number(TokenService.getUserId())
    const date = e.target.date_submitted.value
    let newJob = {
      company: e.target.company.value,
      position: e.target.position.value,
      status: e.target.status.value,
      description: e.target.description.value,
      user_id: userId,
      date_submitted: e.target.date_submitted.value
    }
    if (date !== '' && date !== null) {
      newJob.date_submitted = date
    }
    JobsApiService.postJob(newJob)
      .then(data => {
        this.props.history.push('/joblist')
      })
      .catch(this.context.setError)
  }

  render() {

    return (
      <div className='AddListing'>
        <h2>Add a Job Listing</h2>
        <form className='add-listing-form' onSubmit={(e) => this.addJob(e)}>
          <div>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              id='company'
              placeholder='Company'
            ></input>
          </div>
          <div>
            <label htmlFor='position'>Position</label>
            <input
              type='text'
              name='position'
              id='position'
              placeholder='Position'
            ></input>
          </div>
          <div>
            <label htmlFor='status'>Status</label>
            <select name='status'>
              <option value=''>Select a Status</option>
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
              placeholder='Description'
            ></input>
          </div>
          <div>
            <label htmlFor='date_submitted'>Date Submitted</label>
            <input type='date' name='date_submitted'></input>
          </div>
          <div className='add__button'>
            <button type='submit' value='Add Listing' className='add-button'>
              Add Listing
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddListing;
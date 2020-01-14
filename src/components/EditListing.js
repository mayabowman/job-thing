import React from 'react'

class EditListing extends React.Component {
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
            <select>
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

export default EditListing
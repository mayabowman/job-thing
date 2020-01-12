import React from 'react'
import { Link } from 'react-router-dom'
import './JobListing.css'

class JobListing extends React.Component {
  render() {
    console.log('props', this.props.job.company)
    return (
      <div>
        <div className='JobListing'>
          <h2>{this.props.job.company}</h2>
          <h3>{this.props.job.position}</h3>
          <p>{this.props.job.description}</p>
          <Link to='/editlisting'>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default JobListing


import React from 'react'
import { Link } from 'react-router-dom'
import './JobListing.css'

class JobListing extends React.Component {
  render() {
    return (
      <Link to={`/jobdetails/${this.props.data.id}`}>
        <div className='JobListing'>
          <h2>{this.props.data.company}</h2>
          <h3>{this.props.data.position}</h3>
          <p>{this.props.data.description}</p>
          {/* <p>{this.props.data.id}</p> */}
          {/* <button>See Details</button> */}
        </div>
      </Link>
    )
  }
}

export default JobListing


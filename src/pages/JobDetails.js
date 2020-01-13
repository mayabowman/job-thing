import React from 'react'
import { Link } from 'react-router-dom'

class JobDetails extends React.Component{
  render() {
    <div>
      <div className='JobListing'>
        <h2>{this.props.data.company}</h2>
        <h3>{this.props.data.position}</h3>
        <p>{this.props.data.description}</p>
      </div>
    </div>
  }
}

export default JobDetails
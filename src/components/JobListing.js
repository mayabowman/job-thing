import React from 'react'
import { Link } from 'react-router-dom'
import './JobListing.css'

class JobListing extends React.Component {
  render() {
    console.log('props', this.props)
    return (
      <div>
        <div className='JobListing'>
          <h2>{this.props.data.company}</h2>
          <h3>{this.props.data.position}</h3>
          <p>{this.props.data.description}</p>
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


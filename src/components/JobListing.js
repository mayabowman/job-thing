import React from 'react'
// import dummyStore from '../dummy-store'

class JobListing extends React.Component {
  render() {
    console.log('props', this.props.job.company)
    return (
      <div>
        <h2>{this.props.job.company}</h2>
        <h3>{this.props.job.position}</h3>
        <p>{this.props.job.description}</p>
      </div>
    )
  }
}

export default JobListing


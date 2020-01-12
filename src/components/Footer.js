import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to='/'>Job Thing</Link>
      </footer>
    )
  }
}

export default Footer
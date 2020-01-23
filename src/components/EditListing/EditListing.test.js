import React from 'react';
import ReactDOM from 'react-dom';
import EditListing from './EditListing';

it('renders without crashing', () => {
  const match = {
    params: {
      id: 1
    }
  }
  const div = document.createElement('div')
  ReactDOM.render(<EditListing match={match} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
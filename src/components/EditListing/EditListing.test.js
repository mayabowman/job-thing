import React from 'react';
import ReactDOM from 'react-dom';
import EditListing from './EditListing';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EditListing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
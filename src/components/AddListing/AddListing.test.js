import React from 'react';
import ReactDOM from 'react-dom';
import AddListing from './AddListing';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddListing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
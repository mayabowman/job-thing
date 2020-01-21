import React from 'react';
import ReactDOM from 'react-dom';
import JobDetails from './JobDetails';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<JobDetails />, div)
  ReactDOM.unmountComponentAtNode(div)
})
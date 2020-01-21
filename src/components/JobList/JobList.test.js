import React from 'react';
import ReactDOM from 'react-dom';
import JobList from './JobList';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<JobList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
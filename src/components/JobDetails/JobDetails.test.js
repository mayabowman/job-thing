import React from 'react';
import ReactDOM from 'react-dom';
import JobDetails from './JobDetails';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const match = {
    params: {
      id: 1
    }
  }
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><JobDetails match={match} /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
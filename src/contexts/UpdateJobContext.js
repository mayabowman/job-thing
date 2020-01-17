
import React from 'react';

const UpdateJobContext = React.createContext({
  jobs: [],
  userData: [],
  singleJob: [],
  userId: '',
  error: null,
  setJobs: () => {},
  deleteJob: () => {},
  setSingleJob: () => {},
  setError: () => {},
  setUserData: () => {},
})

export default UpdateJobContext;
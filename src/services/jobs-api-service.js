import config from '../config'
import TokenService from './token-service'

const JobsApiService = {
  getData() {
    return fetch(`${config.API_ENDPOINT}/jobs`, {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getJobsForUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/jobs/user/${user_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  getJobById(id) {
    return fetch(`${config.API_ENDPOINT}/jobs/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
  },

  postJob(newJob) {
    return fetch(`${config.API_ENDPOINT}/jobs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newJob)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  updateJob(id, updatedJob) {
    return fetch(`${config.API_ENDPOINT}/jobs/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedJob)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
    )
  },

  deleteJob(id) {
    return fetch(`${config.API_ENDPOINT}/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
    )
  }
}

export default JobsApiService
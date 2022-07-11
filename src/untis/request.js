import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

instance.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return instance(options)
}

export default request

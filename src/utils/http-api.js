import axios from 'axios'
import config from '@/config'

axios.interceptors.response.use(
  // do nothing
  res => res,
  defaultErrorHandler
)

const SYSTEM_BUSY_CODES = [429, 503]
export function defaultErrorHandler (error) {
  const response = error.response
  // handle busy
  if (SYSTEM_BUSY_CODES.indexOf(response.status) > -1) {
    console.log('api response error = ' + response)
  }
  return Promise.reject(error)
}

/*
 Generic Implementation for api call using axios that contains,
 api path,
 success callback(cb),
 errorHandler callback(errorHandler)
 headerParams
 */
export default {
  getDataViaApi (path, cb, errorHandler, headerParams = {}) {
    const headerObject = { 'Cache-Control': 'no-cache' }
    axios
      .get(config.getApiPath(path), {
        headers: { ...headerObject, ...headerParams }
      })
      .then(cb)
      .catch((res) => {
        errorHandler(res.response)
      })
  },

  postDataViaApi (path, cb, data, errorHandler, headerParams = {}) {
    const headerObject = {}
    axios
      .post(config.getApiPath(path), data, {
        headers: { ...headerObject, ...headerParams }
      })
      .then(cb)
      .catch((res) => {
        errorHandler(res.response)
      })
  },
  defaultErrorHandler
}

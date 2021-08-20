import axios from 'axios'
import * as Auth from './auth'

const apiBase = axios.create({
  baseURL: 'http://localhost:3006/api/v1'
})
const token = Auth.getToken();

const configAuthentication = async (configure: any) => {

  if (token) {
    configure.headers.Authorization = `Bearer ${token}`
  }

  return configure
}

// const checkTokenExpired = (error: any) => {
//   if (error.response.status === 401 || !token) {
//     Auth.signout()
//   }

//   return Promise.reject(error);
// }

apiBase.interceptors.request.use(configAuthentication)

// apiBase.interceptors.response.use( checkTokenExpired)

export default apiBase;
import axios, { AxiosResponse } from 'axios'

type IRequestConfig = {
  url: string
  method: string
  baseUrl?: string
  params?: Record<string, string | number>
  data?: any
  isProtected?: boolean
}

const request = async ({isProtected, ...rest}: IRequestConfig) : Promise<AxiosResponse> => {
  const headers = {
    'content-type': 'application/json'
  }
  if (isProtected) {
    const token = localStorage.getItem('accessToken')
    Object.assign(headers, {
      Authorization: `Bearer ${token}`
    })
  }

  return axios({...rest, headers })
}
export default request
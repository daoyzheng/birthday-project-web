import axios, { AxiosResponse } from 'axios'

type IRequestConfig = {
  url: string
  method: string
  baseUrl?: string
  params?: Record<string, string | number>
  data?: any
}

const request = async (config: IRequestConfig) : Promise<AxiosResponse> => {
  return axios(config)
}
export default request
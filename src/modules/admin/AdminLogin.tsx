import { AxiosResponse } from "axios"
import { FormEvent, useState } from "react"
import request from "../../utils/request"
import { Notification } from "./AdminLogin.styled"

const AdminLogin = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  let notificationTimeout: any
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    clearTimeout(notificationTimeout)
    const formElements = (e.target as HTMLFormElement).elements
    const email = (formElements[0] as HTMLInputElement).value
    const password = (formElements[1] as HTMLInputElement).value
    if (!email) {
      setError('Email is required')
      setShowNotification(true)
      notificationTimeout = setTimeout(() => {
        setError('')
        setShowNotification(false)
      }, 2000)
      return
    }
    if (!password) {
      setError('Password is required')
      setShowNotification(true)
      notificationTimeout = setTimeout(() => {
        setError('')
        setShowNotification(false)
      }, 2000)
      return
    }
    const { accessToken } = await login(email, password)
    localStorage.setItem('accessToken', accessToken)
    window.location.href = '/admin'
  }
  const login = async (email: string, password: string) => {
    const url = `${import.meta.env.VITE_CLIENT_API}/api/users/auth`
    const method = 'post'
    const data = { email, password }
    const config = {
      url,
      method,
      data
    }
    try {
      const res = await request(config)
      return res.data
    } catch (e: any) {
      const response = e.response as AxiosResponse
      setError(response.data.message)
      setShowNotification(true)
      notificationTimeout = setTimeout(() => {
        setError('')
        setShowNotification(false)
      }, 2000)
    }
  }
  return (
    <div className="bg-slate-800 min-h-screen min-w-screen flex justify-center items-center">
      <div className="bg-slate-600/20 w-1/4 min-h-fit h-1/2 rounded backdrop-sepia-0 backdrop-blur-md p-4 py-20 shadow-red-400 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="font-semibold mb-2">Email</div>
          <input
            id="email"
            className="focus:outline-none bg-transparent w-full border-b-2 mb-8 text-lg"
          />
          <div className="font-semibold mb-2">Password</div>
          <input
            id="password"
            className="focus:outline-none bg-transparent w-full border-b-2 mb-8 text-lg"
            type="password"
          />
          <button className="mt-5 w-full">Login</button>
        </form>
      </div>
      <Notification className="w-64 h-12 bg-orange-400 rounded text-lg text-center p-2" show={showNotification}>
        {error}
      </Notification>
    </div>
  )
}
export default AdminLogin
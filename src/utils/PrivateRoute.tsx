import { FC, ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute  = () => {
  let auth = { 'token': true }
  return (
    auth.token ? 
    <Outlet/> :
    <Navigate to="/"/>
  )
}

export default PrivateRoute
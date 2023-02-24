import { FC, ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../utils/useAuth"

interface Props {
  redirectPath: string
}
const ProtectedRoute= ({ redirectPath } : Props) => {
  const isAuth = useAuth()
  return (
    isAuth ? <Outlet/> : <Navigate to={redirectPath} />
  )
}

export default ProtectedRoute
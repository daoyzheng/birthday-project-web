import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
interface decodedToken {
  exp: number
}

const useAuth = () => {
  const token = localStorage.getItem('accessToken')
  let isAuth = false
  if (token) {
    const decodedToken = jwt_decode<decodedToken>(token)
    const currentTime = Date.now() / 1000
    if (currentTime < decodedToken.exp)
      isAuth = true
  }
  return isAuth
}
export default useAuth
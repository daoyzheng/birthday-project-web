import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Admin from "./modules/admin/Admin"
import AdminLogin from "./modules/admin/AdminLogin"
import Home from "./modules/home/Home"
import useAuth from "./utils/useAuth"

function App() {
  const isAuth = useAuth()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin" element={isAuth ? <Admin/> : <Navigate to="/admin/login"/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App

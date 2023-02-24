import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Admin from "./modules/admin/Admin"
import AdminLogin from "./modules/admin/AdminLogin"
import BirthdayWish from "./modules/birthdayWish/BirthdayWish"
import ProtectedRoute from "./modules/common/ProtectedRoute"
import Home from "./modules/home/Home"
import useAuth from "./utils/useAuth"

function App() {
  const isAuth = useAuth()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/birthday-wishes" element={<BirthdayWish/>}/>
        <Route path="/admin/login" element={isAuth ? <Navigate to="/admin" /> : <AdminLogin/>}/>
        <Route element={<ProtectedRoute redirectPath="/admin/login"/>}>
          <Route path="/admin" element={isAuth ? <Admin/> : <Navigate to="/admin/login"/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App

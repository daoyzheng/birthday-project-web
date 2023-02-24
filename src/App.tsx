import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Admin from "./modules/admin/Admin"
import Home from "./modules/home/Home"
import PrivateRoute from "./utils/PrivateRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<PrivateRoute/>}>
          <Route path="/admin" element={<Admin/>}/>
        </Route> 
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Admin from "./modules/admin/Admin"
import Home from "./modules/home/Home"
// require('dotenv').config()

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App

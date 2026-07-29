import { Routes, Route } from 'react-router-dom'
import Landing from './pages/patient/Landing'
import Login from './pages/staff/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
  )
}
export default App
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/patient/Landing'
import Login from './pages/staff/Login'
import JoinQueue from './pages/patient/JoinQueue'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/join" element={<JoinQueue/>}/>
      </Routes>
  )
}
export default App
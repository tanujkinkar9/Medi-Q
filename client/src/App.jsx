import { Routes, Route } from 'react-router-dom'
import Landing from './pages/patient/Landing'
import Login from './pages/staff/Login'
import JoinQueue from './pages/patient/JoinQueue'
import CreateAccount from './pages/patient/CreateAccount'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/join" element={<JoinQueue/>}/>
      <Route path="/register" element={<CreateAccount/>}/>
      </Routes>
  )
}
export default App
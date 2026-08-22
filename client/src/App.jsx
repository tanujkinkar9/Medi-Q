import { Routes, Route } from 'react-router-dom'
import Landing from './pages/patient/Landing'
import Login from './pages/staff/Login'
import JoinQueue from './pages/patient/JoinQueue'
import CreateAccount from './pages/patient/CreateAccount'
import WaitingBoard from './pages/patient/WaitingBoard'
import Doctor from './pages/staff/Doctor'
import Receptionist from './pages/staff/Receptionist'
import StaffManagement from './pages/admin/StaffManagement'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/join" element={<JoinQueue/>}/>
      <Route path="/register" element={<CreateAccount/>}/>
      <Route path="/waiting"element={<WaitingBoard/>}/>
      <Route path="/doctor"element={<Doctor/>}/>
      <Route path="/receptionist"element={<Receptionist/>}/>
      <Route path="/staffmanagement"element={<StaffManagement/>}/>
      </Routes>
  )
}
export default App
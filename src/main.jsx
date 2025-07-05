import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ForgotPassword from './ForgotPassword.jsx';
import Login from './Login.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ResetPassword from './ResetPassword.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pswd" element={<ForgotPassword />} />
        <Route path="/reset-pswd" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar.jsx'
import PolicyList from './pages/PolicyList.jsx'
import PolicyDetail from './pages/PolicyDetail.jsx'
import AccountProfile from './pages/AccountProfile.jsx'
import Login from './pages/Login.jsx'
import './App.css'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) 

  return (
    <BrowserRouter> 
      {isLoggedIn && <Navbar />} 
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={isLoggedIn ? <PolicyList /> : <Navigate to="/login" />} />
        <Route path="/policy/:id" element={isLoggedIn ? <PolicyDetail /> : <Navigate to="/login" />} />
        <Route path="/account" element={isLoggedIn ? <AccountProfile /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
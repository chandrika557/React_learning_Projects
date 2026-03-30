import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../store/Slices/authSlice'
import './Navbar.css'

function Navbar() {
    const dispatch = useDispatch() 

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>Policy Viewer</h2>
            </div>
            <div className="navbar-links">
                <Link to="/">My Policies</Link> 
                <Link to="/account">My Account</Link>
                <button className="logout-btn" onClick={() => dispatch(logout())}>  
                    Logout 
                </button>
            </div>
        </nav>
    )
}

export default Navbar
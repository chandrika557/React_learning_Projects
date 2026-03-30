import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/Slices/authSlice'
import './Login.css'

function Login() {
    const dispatch = useDispatch() 
    const error = useSelector((state) => state.auth.error)  

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (username === '' || password === '') { 
            alert('Please enter username and password!')
            return
        }
        dispatch(login({ username, password }))
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Policy Viewer</h2>
                <p>Sign in to view your policies</p>

                {error && <p className="error-msg">{error}</p>}

                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
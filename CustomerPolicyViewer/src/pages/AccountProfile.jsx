import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AccountProfile.css'

function AccountProfile() {
    const account = useSelector((state) => state.auth.currentUser)
    const policies = useSelector((state) => state.policies.policies)
    const navigate = useNavigate()  

    const activePolicies = policies.filter((p) => p.status === 'Active').length 
    const expiredPolicies = policies.filter((p) => p.status === 'Expired').length

    return (
        <div className="account-container">

            <div className="account-header">
                <div className="avatar">
                    {account.name.charAt(0)} 
                </div>
                <div className="account-info">
                    <h2>{account.name}</h2>
                    <p>{account.email}</p>
                </div>
            </div>

            <div className="account-grid">

                <div className="account-card">
                    <h4>Personal Information</h4>
                    <p><strong>Full Name:</strong> {account.name}</p>
                    <p><strong>Email:</strong> {account.email}</p>
                    <p><strong>Phone:</strong> {account.phone}</p>
                </div>

                <div className="account-card">
                    <h4>Account Information</h4>
                    <p><strong>Account Number:</strong> {account.accountNumber}</p>
                    <p><strong>Member Since:</strong> {account.memberSince}</p>
                </div>

                <div className="account-card">
                    <h4>Policy Summary</h4>
                    <p><strong>Total Policies:</strong> {policies.length}</p>
                    <p><strong>Active Policies:</strong> {activePolicies}</p>
                    <p><strong>Expired Policies:</strong> {expiredPolicies}</p>
                </div>

            </div>

            <button className="view-policies-btn" onClick={() => navigate('/')}>
                View My Policies
            </button>

        </div>
    )
}

export default AccountProfile
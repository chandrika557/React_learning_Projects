import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './PolicyDetail.css'

function PolicyDetail() {
    const { id } = useParams() 
    const navigate = useNavigate()

    const policies = useSelector((state) => state.policies.policies) 
    const policy = policies.find((p) => p.id === parseInt(id)) 

    if (!policy) {
        return (
            <div className="not-found">
                <h2>Policy not found!</h2>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        )
    }

    return (
        <div className="policy-detail-container">

            <button className="back-btn" onClick={() => navigate('/')}> 
                Back
            </button>

            <div className="detail-header">
                <h2>{policy.name}</h2>
                <span className={`status ${policy.status === 'Active' ? 'active' : 'expired'}`}>
                    {policy.status}
                </span>
            </div>

            <div className="detail-grid">

                <div className="detail-card">
                    <h4>Coverage Details</h4>
                    <p><strong>Type:</strong> {policy.type}</p>
                    <p><strong>Coverage Amount:</strong> ₹{policy.coverageAmount}</p>
                </div>

                <div className="detail-card">
                    <h4>Policy Dates</h4>
                    <p><strong>Start Date:</strong> {policy.startDate}</p>
                    <p><strong>End Date:</strong> {policy.endDate}</p>
                </div>

                <div className="detail-card">
                    <h4>Premium Info</h4>
                    <p><strong>Annual Premium:</strong> ₹{policy.premium}</p>
                    <p><strong>Monthly Premium:</strong> ₹{Math.round(policy.premium / 12)}</p> 
                </div>

                <div className="detail-card">
                    <h4>Policy Status</h4>
                    <p><strong>Status:</strong> {policy.status}</p>
                    <p><strong>Policy ID:</strong> POL-000{policy.id}</p>
                </div>

            </div>
        </div>
    )
}

export default PolicyDetail
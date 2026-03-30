import { useNavigate } from 'react-router-dom'
import './PolicyCard.css'

function PolicyCard({ policy }) { 
    const navigate = useNavigate() 

    function viewDetails() {
        navigate(`/policy/${policy.id}`)  
    }

    return (
        <div className="policy-card">
            <div className="policy-card-header">
                <h3>{policy.name}</h3>
                <span className={`status ${policy.status === 'Active' ? 'active' : 'expired'}`}>
                    {policy.status}
                </span>
            </div>
            <div className="policy-card-body">
                <p><strong>Type:</strong> {policy.type}</p>
                <p><strong>Coverage Type:</strong> {policy.coverage}</p>
                <p><strong>Coverage Amount:</strong> ₹{policy.coverageAmount}</p>
                <p><strong>Premium:</strong> ₹{policy.premium}/year</p>
                <p><strong>Valid:</strong> {policy.startDate} → {policy.endDate}</p>
            </div>
            <button onClick={viewDetails} className="details-btn">
                View Details
            </button>
        </div>
    )
}

export default PolicyCard
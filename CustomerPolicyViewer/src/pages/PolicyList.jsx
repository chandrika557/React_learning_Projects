import { useSelector, useDispatch } from 'react-redux'
import { setFilter, setSort } from '../store/Slices/policiesSlice'
import PolicyCard from '../components/PolicyCard.jsx'
import './PolicyList.css'

function PolicyList() {
    const dispatch = useDispatch()
    const allPolicies = useSelector((state) => state.policies.policies)
    const currentUser = useSelector((state) => state.auth.currentUser)
    const policies = allPolicies.filter((p) => p.userId === currentUser.id)
    const filterType = useSelector((state) => state.policies.filterType)
    const sortBy = useSelector((state) => state.policies.sortBy)

    
    let filteredPolicies = policies.filter((policy) => {
        if (filterType === 'All') return true
        return policy.type === filterType
    })

   
    let sortedPolicies = [...filteredPolicies].sort((a, b) => { 
        if (sortBy === 'name') return a.name.localeCompare(b.name)
        if (sortBy === 'premium') return a.premium - b.premium
        return 0
    })

    return (
        <div className="policy-list-container">
            <h2>My Insurance Policies</h2>

            <div className="filter-bar">
                <div className="filter-section">
                    <label>Filter by Type:</label>
                    <select
                        value={filterType}
                        onChange={(e) => dispatch(setFilter(e.target.value))}
                    >
                        <option value="All">All</option>
                        <option value="Health">Health</option>
                        <option value="Car">Car</option>
                        <option value="Life">Life</option>
                        <option value="Home">Home</option>
                    </select>
                </div>

                <div className="sort-section">
                    <label>Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => dispatch(setSort(e.target.value))}
                    >
                        <option value="name">Name</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>
            </div>

           
            <div className="policy-grid">
                {sortedPolicies.length === 0 ? (  
                    <p>No policies found for this filter.</p>
                ) : (
                    sortedPolicies.map((policy) => (
                        <PolicyCard key={policy.id} policy={policy} /> 
                    ))
                )}
            </div>
        </div>
    )
}

export default PolicyList
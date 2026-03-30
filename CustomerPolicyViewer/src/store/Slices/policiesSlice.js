import { createSlice } from "@reduxjs/toolkit";

const policiesSlice = createSlice({
    name: "policies",
    initialState: {
        policies: [
            {
                id: 1,
                userId: 1,
                name: "Health Insurance",
                type: "Health",
                coverage: "Medical Coverage",
                coverageAmount: 500000,
                startDate: "01 Jan 2024",
                endDate: "31 Dec 2024",
                premium: 5000,
                status: "Active"
            },
            {
                id: 2,
                userId: 1,
                name: "Car Insurance",
                type: "Car",
                coverage: "Vehicle Damage",
                coverageAmount: 200000,
                startDate: "01 Mar 2024",
                endDate: "28 Feb 2025",
                premium: 3000,
                status: "Active"
            },
            {
                id: 3,
                userId: 1,
                name: "Life Insurance",
                type: "Life",
                coverage: "Life Coverage",
                coverageAmount: 1000000,
                startDate: "01 Jun 2023",
                endDate: "31 May 2026",
                premium: 8000,
                status: "Active"
            },
            {
                id: 4,
                userId: 1,
                name: "Home Insurance",
                type: "Home",
                coverage: "Property Damage",
                coverageAmount: 300000,
                startDate: "01 Jan 2023",
                endDate: "31 Dec 2023",
                premium: 4000,
                status: "Expired"
            },
            {
                id: 5,
                userId: 2,
                name: "Car Insurance",
                type: "Car",
                coverage: "Vehicle Damage",
                coverageAmount: 150000,
                startDate: "01 Feb 2024",
                endDate: "31 Jan 2025",
                premium: 2500,
                status: "Active"
            },
            {
                id: 6,
                userId: 2,
                name: "Life Insurance",
                type: "Life",
                coverage: "Life Coverage",
                coverageAmount: 800000,
                startDate: "01 Jan 2024",
                endDate: "31 Dec 2026",
                premium: 7000,
                status: "Active"
            }
        ],
        filterType: "All",
        sortBy: "name"
    },
    reducers: {
        setFilter: (state, action) => {
            state.filterType = action.payload
        },
        setSort: (state, action) => {
            state.sortBy = action.payload
        }
    }
});

export const { setFilter, setSort } = policiesSlice.actions; 
export default policiesSlice.reducer; 
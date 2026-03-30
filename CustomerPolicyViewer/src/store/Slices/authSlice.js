import { createSlice } from "@reduxjs/toolkit";

const users = [
    {
        id: 1,
        username: "jaya",
        password: "1234",
        name: "Jaya Chandrika",
        email: "jaya@example.com",
        phone: "9876543210",
        accountNumber: "ACC-2024-001",
        memberSince: "01 Jan 2022"
    },
    {
        id: 2,
        username: "rahul",
        password: "5678",
        name: "Rahul Sharma",
        email: "rahul@example.com",
        phone: "9123456789",
        accountNumber: "ACC-2024-002",
        memberSince: "15 Mar 2023"
    }
]

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        currentUser: null,
        error: ""
    },
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload 
            const user = users.find(
                (u) => u.username === username && u.password === password 
            )
            if (user) {
                state.isLoggedIn = true
                state.currentUser = user
                state.error = ""
            } else {
                state.error = "Invalid username or password!"
            }
        },
        logout: (state) => { 
            state.isLoggedIn = false
            state.currentUser = null
            state.error = ""
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
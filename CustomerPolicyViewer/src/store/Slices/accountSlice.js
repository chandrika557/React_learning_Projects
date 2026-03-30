import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        name: "Jaya Chandrika",
        email: "jaya@example.com",
        phone: "9876543210",
        accountNumber: "ACC-2024-001",
        memberSince: "01 Jan 2022"
    },
    reducers: {}
});

export default accountSlice.reducer;
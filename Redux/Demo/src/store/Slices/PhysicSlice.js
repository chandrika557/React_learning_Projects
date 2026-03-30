import { createSlice } from "@reduxjs/toolkit";

const PhysicsSlice = createSlice({ 
    name: 'Physics',
    initialState: {
        books: ["Physics book 1", "Physics book 2"],
        enrollmentstudentCount: 15
    },
    reducers: {
        addBook: (state, action) => { //reducer function
            state.books.push(action.payload)
        },
        emptyAllBooks: (state, action) => {
            state.books = []
        },
        incrementalEnrolledstudents: (state, action) => {
            state.enrollmentstudentCount++;
        }
    }
});

export const { addBook, emptyAllBooks, incrementalEnrolledstudents } = PhysicsSlice.actions
export default PhysicsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const MathsSlice = createSlice({ 
    name: 'Maths',
    initialState: {
        topics: ["Algebra", "Geometry"],
        studentCount: 10
    },      
    reducers:{
         addTopic: (state, action) => {
            state.topics.push(action.payload)
        },
        emptyAllTopics: (state, action) => {
            state.topics = []
        },
        incrementStudents: (state, action) => {
            state.studentCount++;
        }
    }
});

export const { addTopic, emptyAllTopics, incrementStudents } = MathsSlice.actions
export default MathsSlice.reducer;
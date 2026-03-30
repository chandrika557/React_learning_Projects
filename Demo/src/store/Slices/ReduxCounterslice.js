import { createSlice } from "@reduxjs/toolkit";
const ReduxCounterSlice=createSlice({
    name:"ReduxCounter",  //slice has  3 parts, name , intial state (value), reducer(function)
    initialState:{
        count:5,
        performedaction:""
    },
    reducers:{ 
        increment:(state,action)=>{
            state.count+=1;
            state.performedaction=action.payload;
        }, //functions , every function has two variables(state,action)
        decrement: (state, action) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = 0;
        }
    }
})

export const {increment,decrement,reset}=ReduxCounterSlice.actions;
export default ReduxCounterSlice.reducer;















//js for functionality
//jsx building react components
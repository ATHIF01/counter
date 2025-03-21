import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        // actions are defined inside this reducers
        // function to increament value
        increament:(state,action)=>{
            state.value = state.value+action.payload
        },
        // function to decreament value
        decreament:(state,action)=>{
            state.value = state.value-action.payload
        },
        // function to reset value
        reset:(state)=>{
            state.value = 0
        }
    }
})
// action is required by the component to perform increment,decrement and reset
export const {increament,decreament,reset}=counterSlice.actions

// reducer is required by the store
export default counterSlice.reducer

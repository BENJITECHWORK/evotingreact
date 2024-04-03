import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_eligible: localStorage.getItem("is_eligible")?localStorage.getItem("is_eligible"):true,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setIsEligible(state, action){
            console.log('action.payload', action.payload)
            state.is_eligible = action.payload
        }
    }
})

export const { setIsEligible } = authSlice.actions
export default authSlice.reducer
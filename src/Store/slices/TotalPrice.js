import { createSlice } from "@reduxjs/toolkit";

const TotalPriceSlice = createSlice({
    name : "amountPayable",
    initialState : 0,
    reducers : {
        updateAmount : (state,action)=> state += action.payload,
        subtractAmount : (state,action)=> state-= action.payload,
        deleteAmount : (state,action)=> state-= action.payload[0] * action.payload[1]
    }
})
export const TotalPriceActions = TotalPriceSlice.actions;
export default TotalPriceSlice;
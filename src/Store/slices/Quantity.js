import { createSlice } from "@reduxjs/toolkit";

const QuantitySlice = createSlice({
    name:"quantity",
    initialState : {},
    reducers : {
        initialiseQuantity : (state,action)=>{
            let newPair = String(action.payload);
            if(action.payload in state){
                state[newPair] = state[newPair]+1;
            }
            else{
                state[newPair] = 1;
            }
        },
        addQuantity : (state,action)=>{
            if(action.payload in state){
                state[action.payload] = state[action.payload]+1;
            }
        },
        subQuantity : (state,action)=>{
            if(action.payload in state){
                if(state[action.payload] > 1)
                    state[action.payload] = state[action.payload]-1;
            }
        },
        deleteProperty : (state,action)=>{
            delete state[action.payload];
        }
    }
})
export const QuantitySliceActions = QuantitySlice.actions;
export default QuantitySlice;
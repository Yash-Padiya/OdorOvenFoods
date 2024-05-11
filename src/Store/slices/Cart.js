import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState : {cartItems : []},
    reducers : {
        addToCart : (state,action)=>{
            state.cartItems.push(action.payload);
        },
        discardFromCart :(state,action)=>{
            state.cartItems = state.cartItems.filter(item=> item.id != action.payload);
        }
    }
})
export const CartActions = CartSlice.actions;
export default CartSlice;
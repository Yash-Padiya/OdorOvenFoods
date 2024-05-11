import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../../data/FoodData";

const FoodItemsSlice = createSlice({
    name : "foodItems",
    initialState : FoodData,
    reducers : {
        listPizzas : (state)=> state = state.filter(item=> item.category == "pizza"),
        listTopRated : (state)=> state = state.filter(item=> item.rating >=4.4 ),
        listSandwiches : (state)=> state = state.filter(item=> item.category == "sandwich"),
        listBurgers : (state)=> state = state.filter(item=> item.category == "burger"),
        listCoffee : (state)=> state = state.filter(item=> item.category == "coffee&mocktails"),
        listPasta : (state)=> state = state.filter(item=> item.category == "pasta&noodles"),
        listVeg : (state)=>state = state.filter(item=>item.isVeg == true),
        listNonVeg : (state)=> state = state.filter(item=> item.isVeg != true),
        listAll : (state)=> state = FoodData,
        searchProduct : (state,action)=> state = state.filter(item=> item.name.toLowerCase().includes(action.payload.toLowerCase()))
    }
})
export const FoodItemsActions = FoodItemsSlice.actions;
export default FoodItemsSlice;
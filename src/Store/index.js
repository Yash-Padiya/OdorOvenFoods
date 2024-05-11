import { configureStore } from "@reduxjs/toolkit";
import FoodItemsSlice from "./slices/FoodItemsSlice";
import CartSlice from "./slices/Cart";
import QuantitySlice from "./slices/Quantity";
import TotalPriceSlice from "./slices/TotalPrice";

const FlavoroStore = configureStore({
    reducer : {
        foodItems : FoodItemsSlice.reducer,
        cart : CartSlice.reducer,
        quantity : QuantitySlice.reducer,
        amountPayable : TotalPriceSlice.reducer
    }
})
export default FlavoroStore;
import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slice/CartSlice"
import todosReducer from "../../Component/redux-toolkit/slice/ToDoSlice";

export const store1 = configureStore({
    reducer:{
        // cart: cartReducer,
        todos: todosReducer,
    }
})

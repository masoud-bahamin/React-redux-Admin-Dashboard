import { configureStore } from "@reduxjs/toolkit";
import { slice as products } from "./products";
import { slice as categories } from "./category";
import { slice as users} from "./users";


const store = configureStore({
    reducer : {
        products : products.reducer,
        categories : categories.reducer,
        users : users.reducer
    }
})

export type StoreType = ReturnType <typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store
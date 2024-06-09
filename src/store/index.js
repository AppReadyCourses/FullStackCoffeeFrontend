import {configureStore} from "@reduxjs/toolkit"
import coffeesReducer from "../features/coffeeSlice"

export const store = configureStore({
    reducer: {
        coffees: coffeesReducer
    }
})
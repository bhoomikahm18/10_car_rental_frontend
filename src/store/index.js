import { configureStore, createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: [],
    reducers: {

    }
})

export const carsAction = carsSlice.actions;

export const store = configureStore({
    reducer: {
        cars: carsSlice.reducer
    }

})
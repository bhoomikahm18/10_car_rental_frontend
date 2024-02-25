import { configureStore, createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: { cars: [] },
    reducers: {
        getAllCars(draft, action) {
            draft.cars = action.payload
        }
    }
})

const alertSlice = createSlice({
    name: "alert",
    initialState: { loading: false },
    reducers: {
        isLoading(draft, action) {
            draft.loading = action.payload.loading;
        }
    }
})

export const carsAction = carsSlice.actions;
export const alertAction = alertSlice.actions;

export const store = configureStore({
    reducer: {
        car: carsSlice.reducer,
        alert: alertSlice.reducer
    }

})
import { configureStore, createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: [],
    reducers: {
        GET_ALL_CARS(state, action) {
            state = action.payload
        }
    }
})

const alertSlice = createSlice({
    name: "loading",
    initialState: { loading: false },
    reducer: {
        alert: (state, action) => {
            if ("LOADING") {
            state.loading = action.payload;
            } else {
                state = state;
            }

        }
    }
})

export const carsAction = carsSlice.actions;
export const alertAction = alertSlice.actions;

export const store = configureStore({
    reducer: {
        cars: carsSlice.reducer,
        alert: alertAction.reducer
    }

})
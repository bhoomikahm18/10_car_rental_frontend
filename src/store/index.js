import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import carSlice from "./car_slice";
import alertSlice from "./alert_slice";
// import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: {
        car: carSlice.reducer,
        alert: alertSlice.reducer
    },
});

export default store;
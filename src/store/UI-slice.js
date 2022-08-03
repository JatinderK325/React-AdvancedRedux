import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    }
});

// uiSlice also exposes an actions which we can use and we will expose them as well,
export const uiActions = uiSlice.actions;
export default uiSlice;

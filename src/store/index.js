import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice from './UI-slice';

const store = configureStore({
    // merging different reducers to get one main reducer in the store.
    reducer: { 
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
     },
});

export default store;


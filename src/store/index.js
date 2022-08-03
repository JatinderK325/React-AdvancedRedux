import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './UI-slice';

const store = configureStore({
    reducer: { cart: uiSlice.reducer, },
});

export default store;


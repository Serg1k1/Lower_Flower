import { configureStore } from '@reduxjs/toolkit';

import { filtersApiSlice } from '../components/api/filtersApiSlice';
import { flowersApiSlice } from '../components/api/flowersApiSlice';

const store = configureStore({
    reducer: { [filtersApiSlice.reducerPath]: filtersApiSlice.reducer, [flowersApiSlice.reducerPath]: flowersApiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filtersApiSlice.middleware, flowersApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
import { configureStore } from '@reduxjs/toolkit';

import { filtersApiSlice } from '../components/api/filtersApiSlice';

const store = configureStore({
    reducer: { [filtersApiSlice.reducerPath]: filtersApiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filtersApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
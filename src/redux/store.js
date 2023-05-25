import { configureStore } from '@reduxjs/toolkit';
import { listReducer } from './listSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: listReducer,
    filter: filterReducer,
  },
});

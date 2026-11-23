import { configureStore } from "@reduxjs/toolkit";
import NoteTypeBoxReducer from '../NoteTypeBox';

export const store = configureStore({
    reducer:{
        typeBox:NoteTypeBoxReducer
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
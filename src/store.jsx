import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todosSlice.jsx';
import productReducer from './slice/productSlice.jsx';
import messageReducer from './slice/messageSlice.jsx';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        product: productReducer,
        message: messageReducer,
    },
});
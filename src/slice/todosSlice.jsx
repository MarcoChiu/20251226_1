import { createSlice } from '@reduxjs/toolkit';

//todos 對應  todos: todosReducer in store.jsx
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            { id: 1, text: 'Learn Redux Toolkit', completed: false },
            { id: 2, text: 'Build Todo App', completed: false },
        ]
    },
    reducers: { //狀態管理器
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(t => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload);
        },
        editTodo: (state, action) => {
            const todo = state.items.find(t => t.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        }
    }
});

//reducers可以使用action具名匯出
export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
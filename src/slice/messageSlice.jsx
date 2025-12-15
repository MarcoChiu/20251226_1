import { createSlice } from '@reduxjs/toolkit';

// ... (imports remain)

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: [],
        unreadCount: 0
    },
    reducers: {
        addMessage: (state, action) => {
            const id = action.payload.id || Date.now();
            state.messages.push({
                id: id,
                text: action.payload.text,
                type: action.payload.type || 'info', // success, info, warning, error
                read: false,
                timestamp: new Date().toISOString()
            });
            state.unreadCount += 1;
        },
        markAsRead: (state, action) => {
            const message = state.messages.find(m => m.id === action.payload);
            if (message && !message.read) {
                message.read = true;
                state.unreadCount = Math.max(0, state.unreadCount - 1);
            }
        },
        markAllAsRead: (state) => {
            state.messages.forEach(message => {
                message.read = true;
            });
            state.unreadCount = 0;
        },
        deleteMessage: (state, action) => {
            const message = state.messages.find(m => m.id === action.payload);
            if (message && !message.read) {
                state.unreadCount = Math.max(0, state.unreadCount - 1);
            }
            state.messages = state.messages.filter(m => m.id !== action.payload);
        },
        clearAllMessages: (state) => {
            state.messages = [];
            state.unreadCount = 0;
        }
    }
});

export const { addMessage, markAsRead, markAllAsRead, deleteMessage, clearAllMessages } = messageSlice.actions;

export const createAsyncMessage = (payload) => (dispatch) => {
    const id = Date.now();
    const timeout = payload.timeout || 3000;

    dispatch(addMessage({
        ...payload,
        id
    }));

    setTimeout(() => {
        dispatch(deleteMessage(id));
    }, timeout);
};

export default messageSlice.reducer;

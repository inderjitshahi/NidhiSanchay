// redux/slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    // Add other user-related state properties here if needed
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        // Add other reducers as needed
    },
});

// Export the slice's reducer and actions
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

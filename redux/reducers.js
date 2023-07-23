// redux/reducers.js

import { combineReducers } from 'redux';
import userReducer from './slices/userSlice'; // Import other slices as needed

const rootReducer = combineReducers({
    user: userReducer,
    // Add other slices here
});

export default rootReducer;

// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use the default storage engine (localStorage)

const persistConfig = {
    key: 'root',
    storage,
    // Add any blacklist or whitelist options if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // Add any middleware or enhancers here if needed
});

export const persistor = persistStore(store);

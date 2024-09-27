import { configureStore } from '@reduxjs/toolkit';
import domainSearchReducer from '../redux/domain/domainSlice';
import userSearchReducer from '../redux/user/userSlice';

export const store = configureStore({
    reducer: {
        domainSearch: domainSearchReducer,
        user: userSearchReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

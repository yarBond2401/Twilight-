import {createAsyncThunk} from "@reduxjs/toolkit";
import {twilightApi} from "@/redux/api";

export const fetchUserInfo = createAsyncThunk(
    'user/fetchUserInfo',
    async (_, { rejectWithValue }) => {
        try {
            const response = await twilightApi.get('/users/current');
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
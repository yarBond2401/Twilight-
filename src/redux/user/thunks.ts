import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserData} from "@/redux/user/types";
import {delay, handleApiError} from "@/redux/utils";
import {mockResponse} from "@/redux/user/mockData";

export const fetchUserInfo = createAsyncThunk<UserData, void, { rejectValue: string }>(
    'user/fetchUserInfo',
    async (_, { rejectWithValue }) => {
        try {
            await delay(2000);

            return mockResponse;
            /*return await twilightApi.get<UserData>('/users/current');*/
        } catch (error: any) {
            return rejectWithValue(handleApiError(error));
        }
    }
);
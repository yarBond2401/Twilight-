import {createSlice} from "@reduxjs/toolkit";
import {fetchUserInfo} from "@/redux/user/thunks";

interface DomainState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DomainState = {
    data: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'domain',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default userSlice.reducer;
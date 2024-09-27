import { createSlice } from "@reduxjs/toolkit";
import { fetchDomainData, fetchMoreDomainData } from "@/redux/domain/thunks";
import {DomainResponse} from "@/redux/domain/types";

interface DomainState {
    data: DomainResponse['data'];
    next: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DomainState = {
    data: [],
    next: '',
    status: 'idle',
    error: null,
};

const domainSlice = createSlice({
    name: 'domain',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Domain Data
            .addCase(fetchDomainData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDomainData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.data;
                state.next = action.payload.next;
            })
            .addCase(fetchDomainData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })

            // Fetch More Domain Data
            .addCase(fetchMoreDomainData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMoreDomainData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.data;
                state.next = action.payload.next;
            })
            .addCase(fetchMoreDomainData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default domainSlice.reducer;

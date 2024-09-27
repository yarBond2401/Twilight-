import {createAsyncThunk} from "@reduxjs/toolkit";
import {mockResponse} from "@/redux/domain/mockData";
import {delay, handleApiError, mapSearchParamsToRequestBody} from "@/redux/utils";
import {twilightApi} from "@/redux/api";

export const fetchDomainData = createAsyncThunk(
    'domain/fetchDomainData',
    async (
        {
            domain,
            filter,
            infectionDateFrom,
            infectionDateTo,
        }: { domain: string; filter: string; infectionDateFrom: string; infectionDateTo: string },
        { rejectWithValue }
    ) => {
        try {

            await delay(2000);

            return mockResponse;

          /*  return await twilightApi.post('/infections/_search', mapSearchParamsToRequestBody({
                domain,
                filter,
                infectionDateFrom,
                infectionDateTo,
                next: null
            }));*/
        } catch (error: any) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const fetchMoreDomainData = createAsyncThunk(
    'domain/fetchMoreDomainData',
    async ({
               domain,
               filter,
               infectionDateFrom,
               infectionDateTo,
               next
           }: { domain: string; filter: string; infectionDateFrom: string; infectionDateTo: string, next: string }, { rejectWithValue }) => {
        try {

            await delay(2000);

            return mockResponse;

            /*return await twilightApi.post('/infections/_search', mapSearchParamsToRequestBody({
                domain,
                filter,
                infectionDateFrom,
                infectionDateTo,
                next
            }));*/
        } catch (error: any) {
            return rejectWithValue(handleApiError(error));
        }
    }
);
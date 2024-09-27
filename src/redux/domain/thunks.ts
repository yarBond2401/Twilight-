import {createAsyncThunk} from "@reduxjs/toolkit";
import {mockResponse} from "@/redux/domain/mockData";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
            console.log('Fetching data...', { domain, filter, infectionDateFrom, infectionDateTo });

            await delay(2000);

            return mockResponse;

            /*
            const response = await twilightApi.post('/infections/_search', {
                domains: [domain],
                root_domains: [domain],
                app_domains: [domain],
                email_domains: [domain],
                size: 10,
                filter,
                infectionDateFrom,
                infectionDateTo,
            });
            return response.data;
            */
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
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
           }: { domain: string; filter: string; infectionDateFrom: string; infectionDateTo: string }, { rejectWithValue }) => {
        try {
            console.log('I am here', mockResponse);
            await delay(2000);

            return mockResponse;
            /* return await twilightApi.post('/infections/_search', {
                 domains: [domain],
                 root_domains: [domain],
                 app_domains: [domain],
                 email_domains: [domain],
                 size: 10
             });*/
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
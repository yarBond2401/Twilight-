import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchDomainData, fetchMoreDomainData } from "@/redux/domain/thunks";
import SearchBar from "@/common/searchBar";
import Filters from "@/common/filters";
import DataTable from "@/common/table";
import Pagination from "@/common/pagination";
import { Container, Box, Typography } from '@mui/material';

const Search = () => {
    const [domain, setDomain] = useState('');
    const [filter, setFilter] = useState('');
    const [infectionDateFrom, setInfectionDateFrom] = useState('');
    const [infectionDateTo, setInfectionDateTo] = useState('');
    const dispatch = useAppDispatch();
    const { data, next, status } = useAppSelector(state => state.domainSearch);

    const handleSearch = () => {
        if (domain) {
            dispatch(fetchDomainData({ domain, filter, infectionDateFrom, infectionDateTo }));
        }
    };

    const handleMore = () => {
        if (domain && next) {
            dispatch(fetchMoreDomainData({ domain, filter, infectionDateFrom, infectionDateTo, next }));
        }
    };

    const handleDateFromChange = (formattedDate: string) => {
        setInfectionDateFrom(formattedDate);
    };

    const handleDateToChange = (formattedDate: string) => {
        setInfectionDateTo(formattedDate);
    };

    const isLoading = status === 'loading';

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 80px)',
                minWidth: '100%',
                overflow: 'auto',
                padding: '50px',
            }}
        >
            <Box
                sx={{
                    minWidth: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 2,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Domain Search
                </Typography>
                <SearchBar
                    domain={domain}
                    onDomainChange={(e) => setDomain(e.target.value)}
                    onSearch={handleSearch}
                />
                <Filters
                    filter={filter}
                    onFilterChange={(e) => setFilter(e.target.value)}
                    infectionDateFrom={infectionDateFrom}
                    infectionDateTo={infectionDateTo}
                    onDateFromChange={handleDateFromChange}
                    onDateToChange={handleDateToChange}
                />
                <Box sx={{ flexGrow: 1, marginTop: 4 }}>
                    <DataTable data={data} />
                </Box>
                <Pagination
                    isLoading={isLoading}
                    next={next}
                    onFirstPage={handleSearch}
                    onNextPage={handleMore}
                />
            </Box>
        </Container>
    );
};

export default Search;

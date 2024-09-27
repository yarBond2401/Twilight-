import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Box, SelectChangeEvent } from '@mui/material';

interface FiltersProps {
    filter: string;
    onFilterChange: (event: SelectChangeEvent<string>) => void;
    infectionDateFrom: string;
    infectionDateTo: string;
    onDateFromChange: (date: string) => void;
    onDateToChange: (date: string) => void;
}

const formatToISO8601 = (date: string): string => {
    const selectedDate = new Date(date);
    return selectedDate.toISOString();
};

const Filters: React.FC<FiltersProps> = ({
                                             filter,
                                             onFilterChange,
                                             infectionDateFrom,
                                             infectionDateTo,
                                             onDateFromChange,
                                             onDateToChange
                                         }) => {
    const [dateFrom, setDateFrom] = useState(infectionDateFrom);
    const [dateTo, setDateTo] = useState(infectionDateTo);

    const handleDateFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setDateFrom(date);
        const formattedDate = formatToISO8601(date);
        onDateFromChange(formattedDate);
    };

    const handleDateToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setDateTo(date);
        const formattedDate = formatToISO8601(date);
        onDateToChange(formattedDate);
    };

    return (
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
            <Box flexBasis="100%" flexGrow={1} maxWidth={{ xs: '100%', md: '30%' }}>
                <FormControl fullWidth>
                    <InputLabel id="filter-select-label">Filter by Domain:</InputLabel>
                    <Select
                        labelId="filter-select-label"
                        value={filter}
                        label="Filter by Domain"
                        onChange={onFilterChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="domains">Domains</MenuItem>
                        <MenuItem value="root_domains">Root Domains</MenuItem>
                        <MenuItem value="app_domains">App Domains</MenuItem>
                        <MenuItem value="email_domains">Email Domains</MenuItem>
                        <MenuItem value="ips">IPs</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box flexBasis="100%" flexGrow={1} maxWidth={{ xs: '100%', md: '30%' }}>
                <TextField
                    fullWidth
                    type="date"
                    label="Infection Date From"
                    InputLabelProps={{ shrink: true }}
                    value={dateFrom}
                    onChange={handleDateFromChange}
                />
            </Box>

            <Box flexBasis="100%" flexGrow={1} maxWidth={{ xs: '100%', md: '30%' }}>
                <TextField
                    fullWidth
                    type="date"
                    label="Infection Date To"
                    InputLabelProps={{ shrink: true }}
                    value={dateTo}
                    onChange={handleDateToChange}
                />
            </Box>
        </Box>
    );
};

export default Filters;

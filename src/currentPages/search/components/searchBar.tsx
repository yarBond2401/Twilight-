import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface SearchBarProps {
    domain: string;
    onDomainChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ domain, onDomainChange, onSearch }) => (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginBottom: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
            <TextField
                fullWidth
                type="text"
                label="Enter domain name"
                variant="outlined"
                value={domain}
                onChange={onDomainChange}
                inputProps={{ sx: { height: '100%' } }}
            />
        </Box>
        <Box>
            <Button
                variant="contained"
                color="primary"
                onClick={onSearch}
                sx={{
                    height: '100%',
                    width: '100%'
                }}
            >
                Search
            </Button>
        </Box>
    </Box>
);

export default SearchBar;

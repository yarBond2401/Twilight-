import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface PaginationProps {
    next: string;
    onFirstPage: () => void;
    onNextPage: () => void;
    isLoading: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ next, onFirstPage, onNextPage, isLoading }) => (
    <Box sx={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button
            variant="contained"
            color="primary"
            onClick={onFirstPage}
            disabled={isLoading}
            sx={{ width: { xs: '100%', md: 'auto' } }}
        >
            {isLoading ? (
                <CircularProgress size={24} color="inherit" />
            ) : (
                'First Page'
            )}
        </Button>
        {next && (
            <Button
                variant="contained"
                color="success"
                onClick={onNextPage}
                disabled={isLoading}
                sx={{ width: { xs: '100%', md: 'auto' } }}
            >
                {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                ) : (
                    'Next'
                )}
            </Button>
        )}
    </Box>
);

export default Pagination;

import React from 'react';
import Button from '@mui/material/Button';

interface PaginationProps {
    next: string;
    onFirstPage: () => void;
    onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ next, onFirstPage, onNextPage }) => (
    <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button
            variant="contained"
            color="primary"
            onClick={onFirstPage}
            sx={{ width: { xs: '100%', md: 'auto' } }}
        >
            First Page
        </Button>
        {next && (
            <Button
                variant="contained"
                color="success"
                onClick={onNextPage}
                sx={{ width: { xs: '100%', md: 'auto' } }}
            >
                Next
            </Button>
        )}
    </div>
);

export default Pagination;

import React from 'react';
import { useAppSelector } from "@/hooks";
import {
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
    IconButton
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

interface DataTableProps {
    data: any[] | null;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    const { status, error } = useAppSelector((state) => state.domainSearch);
    const isLoading = status === 'loading';
    const isError = status === 'failed';

    return (
        <TableContainer component={Paper}>
            <Box position="relative" width="100%" height="100%">
            {isLoading ? (
                    <Box position="absolute" top={0} left={0} right={0} bottom={0} display="flex" alignItems="center" justifyContent="center">
                        <CircularProgress />
                    </Box>
                ) : isError ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <Typography variant="h6" color="error">{error || "Something went wrong, please try again later."}</Typography>
                    </Box>
                ) : data && data.length > 0 ? (
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>IP</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>OS</TableCell>
                                <TableCell>Credentials</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item: any) => (
                                <TableRow key={item.id} hover>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.computer_information.username}</TableCell>
                                    <TableCell>{item.computer_information.ip}</TableCell>
                                    <TableCell>{item.computer_information.country}</TableCell>
                                    <TableCell>{item.computer_information.os}</TableCell>
                                    <TableCell>
                                        {item.credentials.map((cred: any, index: number) => (
                                            <Box key={index} component="span" display="block">
                                                {/* Use an icon for the URL */}
                                                <strong>URL:</strong>{" "}
                                                <IconButton
                                                    component="a"
                                                    href={cred.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Open URL"
                                                >
                                                    <LinkIcon />
                                                </IconButton>
                                                {cred.creds.map((c: any, idx: number) => (
                                                    <Box key={idx} component="span" display="block">
                                                        <strong>Username:</strong> {c.username}, <strong>Password:</strong> {c.password}
                                                    </Box>
                                                ))}
                                            </Box>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <Typography variant="subtitle1">No data found</Typography>
                    </Box>
                )}
            </Box>
        </TableContainer>
    );
};

export default DataTable;

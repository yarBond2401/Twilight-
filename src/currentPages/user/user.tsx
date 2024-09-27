import { RootState } from '@/redux/store';
import { useAppSelector } from '@/hooks';
import { Typography, Paper, CircularProgress, Container } from '@mui/material';

function UserPage() {
    const { data, status, error } = useAppSelector((state: RootState) => state.user);

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            {status === 'loading' && (
                <CircularProgress />
            )}
            {status === 'failed' && (
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            )}
            {status === 'succeeded' && data && (
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        textAlign: 'center',
                        backgroundColor: '#fff',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        {data.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Email: {data.email}
                    </Typography>
                    <Typography variant="body1">
                        Credits: {data.credits}
                    </Typography>
                </Paper>
            )}
        </Container>
    );
}

export default UserPage;

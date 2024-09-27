import React, { useEffect, useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'

const NavBar: React.FC = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            setValue(0);
        } else if (currentPath === '/user') {
            setValue(1);
        } else if (currentPath === '/graphs') {
            setValue(2);
        }
    }, []);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) {
            router.push('/');
        } else if (newValue === 1) {
            router.push('/user');
        } else if (newValue === 2) {
            router.push('/graphs');
        }
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: 'none', padding: '0.5rem 1rem' }}>
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff', paddingLeft: '1rem' }}
                >
                    MyApp
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                    aria-label="navigation tabs"
                    sx={{
                        '& .MuiTab-root': {
                            fontWeight: 500,
                            fontSize: '1rem',
                            minWidth: 100,
                            padding: '0.5rem',
                        },
                        '& .Mui-selected': {
                            color: 'white',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#ffeb3b',
                        },
                    }}
                >
                    <Tab label="Domains" />
                    <Tab label="Page Info" />
                    <Tab label="Graphs" />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

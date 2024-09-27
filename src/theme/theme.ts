import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6497D6',
            light: '#B3D7ED',
            dark: '#4678A3',
        },
        background: {
            default: 'var(--background)',
            paper: 'var(--foreground)',
        },
        neutral: {
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
        },
    },
    typography: {
        fontFamily: [
            'Arial',
            'Helvetica',
            'sans-serif'
        ].join(','),
        fontSize: 14,
        h1: { fontSize: '3.75rem' },
        h2: { fontSize: '3rem' },
        h3: { fontSize: '2.25rem' },
        body1: { fontSize: '1rem' },
        button: { fontSize: '0.875rem' }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
                    borderRadius: '8px',
                }
            }
        }
    }
});

export default theme;

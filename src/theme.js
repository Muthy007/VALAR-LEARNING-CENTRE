import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#101B33', // Navy
      light: '#1D2D50',
      dark: '#0A1224',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1E9457', // Green accent
      light: '#28B86D',
      dark: '#14673B',
      contrastText: '#FFFFFF',
    },
    accent: {
      amber: '#F59E0B',
      coral: '#FF6B6B',
      purple: '#8B5CF6',
      teal: '#14B8A6',
    },
    background: {
      default: '#FBF9F4', // Sand / off-white
      paper: '#FFFFFF',
      alt: '#F3EFE6',
    },
    text: {
      primary: '#101B33',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Baloo 2", cursive, sans-serif',
      fontWeight: 800,
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Baloo 2", cursive, sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Baloo 2", cursive, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: '"Baloo 2", cursive, sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: '"Baloo 2", cursive, sans-serif',
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h6: {
      fontFamily: '"Baloo 2", cursive, sans-serif',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '12px 28px',
          fontSize: '1rem',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(30, 148, 87, 0.3)',
          },
        },
        containedPrimary: {
          backgroundColor: '#101B33',
          '&:hover': {
            backgroundColor: '#1D2D50',
            boxShadow: '0 8px 25px rgba(16, 27, 51, 0.4)',
          },
        },
        containedSecondary: {
          backgroundColor: '#1E9457',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#14673B',
            boxShadow: '0 8px 25px rgba(30, 148, 87, 0.45)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0px 10px 30px rgba(16, 27, 51, 0.05)',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(16, 27, 51, 0.06)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 20px 45px rgba(16, 27, 51, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontFamily: '"Baloo 2", cursive, sans-serif',
          borderRadius: '12px',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

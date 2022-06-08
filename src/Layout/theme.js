import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(47,99,99,1)'
      }
    },
  })
  
  theme.overrides = {
    ...theme.overrides,
    MuiButton: {
        ...theme.MuiButton,
        root: {
           ...theme.root,
            backgroundColor: theme.palette.primary.main,
        },
        label: {
          ...theme.label,
          color:theme.palette.primary.contrastText,
        }
    },
    MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'rgba(47,99,99,1)'
          }
        }
      }
  }
export default theme;  
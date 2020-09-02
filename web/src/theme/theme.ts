import { createMuiTheme } from '@material-ui/core/styles';

const themeConfig = (prefersDarkMode: boolean) =>
  createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#FFADAD',
      },
      secondary: {
        main: '#FDFFB6',
      },
    },
    typography: {
      fontFamily: 'Poppins, Archivo',
    },
  });

export default themeConfig;

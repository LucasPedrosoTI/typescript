import React, { useReducer, useMemo } from 'react';
import { ThemeProvider, useMediaQuery } from '@material-ui/core';
// import { AppContext, INITIAL_STATE, reducer } from './context/AppContext';

import './assets/styles/global.css';
import Routes from './routes';
import themeConfig from './theme/theme';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const getThemeConfig = themeConfig(prefersDarkMode);
  // const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const theme = useMemo(() => getThemeConfig, [getThemeConfig]);

  return (
    <ThemeProvider theme={theme}>
      {/* // <AppContext.Provider value={{state, dispatch}}> */}
      <Routes />
      {/* // </AppContext.Provider> */}
    </ThemeProvider>
  );
}

export default App;

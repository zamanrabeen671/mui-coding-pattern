import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useState } from 'react';
import { AppRouter } from '../Router';
import './App.css';

export const AppContext = createContext();
function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <AppContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={darkTheme}>
        <AppRouter />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;

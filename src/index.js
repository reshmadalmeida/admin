import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';

import App from './App';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>

);


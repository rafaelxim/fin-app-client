import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import InvestmentRegistration from './pages/InvestmentRegistration';
import 'moment/locale/pt-br';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FullScreenLoader from './features/FullScreenLoader';
import { store } from './app/store';
import { SnackbarProvider } from 'notistack';
import DividendsInsertion from './pages/DividendsInsertion';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/registro-de-investimentos',
    element: <InvestmentRegistration />,
  },

  {
    path: '/insercao-dividendos',
    element: <DividendsInsertion />,
  },
]);

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

const MUItheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    text: {
      primary: theme.colors.text.primary,
      secondary: theme.colors.text.primary,
      disabled: theme.colors.text.disabled,
    },
    background: {
      default: theme.colors.background.default,
      paper: theme.colors.background.paper,
    },
  },
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={MUItheme}>
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="pt-br">
          <ApolloProvider client={client}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <GlobalStyles />
              <FullScreenLoader />
              <RouterProvider router={router} />
            </SnackbarProvider>
          </ApolloProvider>
        </LocalizationProvider>
      </MUIThemeProvider>
    </ThemeProvider>
  </Provider>
);

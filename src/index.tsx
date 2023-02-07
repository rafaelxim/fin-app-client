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
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import InvestmentRegistration from './pages/InvestmentRegistration';
import 'moment/locale/pt-br';

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
    path: 'about',
    element: <div>About</div>,
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
      main: theme.colors.primary600,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    text: {
      primary: theme.colors.grey100,
      secondary: theme.colors.grey100,
      disabled: theme.colors.grey800,
    },
    background: {
      default: theme.colors.primary800,
      paper: theme.colors.primary200,
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
  <ThemeProvider theme={theme}>
    <MUIThemeProvider theme={MUItheme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ApolloProvider>
    </MUIThemeProvider>
  </ThemeProvider>
);

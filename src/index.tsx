import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { StoreContext } from 'redux-react-hook';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AuthorizationProvider } from './components/AuthorizationContext';

import reportWebVitals from './reportWebVitals';

import './api/mocks/axiosMock';
import './reset.css';

ReactDOM.render(
    <React.StrictMode>
        <SnackbarProvider maxSnack={3}>
            <StoreContext.Provider value={store}>
                <BrowserRouter>
                    <ErrorBoundary>
                        <AuthorizationProvider>
                            <App />
                        </AuthorizationProvider>
                    </ErrorBoundary>
                </BrowserRouter>
            </StoreContext.Provider>
        </SnackbarProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

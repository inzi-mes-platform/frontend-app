import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { store } from 'inzi-mes-platform-frontend-framework';

import App from './App';
import { Provider } from 'react-redux';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
            <App /> 
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
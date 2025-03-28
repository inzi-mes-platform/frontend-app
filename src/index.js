import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));



rootElement.render(
    <React.StrictMode>
        <BrowserRouter>
        <App /> 
        </BrowserRouter>
    </React.StrictMode>
);
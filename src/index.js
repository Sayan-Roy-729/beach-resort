import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { RoomProvider } from './context';

ReactDOM.render(
    <RoomProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </RoomProvider>,
    document.getElementById('root')
);

reportWebVitals();

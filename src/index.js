import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './paltrows-power-toes/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
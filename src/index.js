import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

$.ajaxSetup({
    crossOrigin: true,
    type: 'GET',
    accept: 'application/json'
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

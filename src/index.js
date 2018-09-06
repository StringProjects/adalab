import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';
import registerServiceWorker from './registerServiceWorker';
import AppPrivate from './private/AppPrivate';

ReactDOM.render(<App />,
    document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.css';
import App from './App';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

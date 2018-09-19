import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.css';


ReactDOM.render(  
  <HashRouter>
      <App />
  </HashRouter>, 
  document.getElementById('root')
);

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root'));
registerServiceWorker();

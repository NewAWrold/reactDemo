import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Apptest from './App.test.js';
import Test from './Test.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();

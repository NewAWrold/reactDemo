import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PinlunFather from './component/pinlunFather.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<PinlunFather/>, document.getElementById('root'));
registerServiceWorker(); //提高访问速度

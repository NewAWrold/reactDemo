import React from 'react';
import ReactDOM from 'react-dom'; //DOM相关的功能
import App from './App';

ReactDOM.render(
    <h1>hello, my son!</h1>,
    document.getElementById('myson')
);
// it('xxx',()=>{
//     const myson = document.createElement('h1');
//     ReactDOM.render(<APP />, myson);
//     ReactDOM.unmountComponentAtNode(myson);
// });
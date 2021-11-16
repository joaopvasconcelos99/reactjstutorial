import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

//render Counter component
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>, //React.StrictMode: ferramenta para mostrar potenciais problemas na aplicação, não é necessária para funcionar
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/index';
import Todo from './components/todo';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
    {/* <Index /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

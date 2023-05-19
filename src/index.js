import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
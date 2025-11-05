import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import {store} from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// 

root.render(<Provider store={store}> <App /> </Provider>);
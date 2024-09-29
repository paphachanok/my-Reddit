import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from this package
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust path to your store file
import App from './App';
import './index.css';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render your application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

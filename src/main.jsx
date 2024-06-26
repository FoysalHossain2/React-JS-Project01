import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import FirebaseApp from '../Firebase/FirebaseConfig.js';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App/>
    </Provider>,
  </React.StrictMode>
)

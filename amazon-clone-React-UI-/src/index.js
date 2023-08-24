import React from 'react';
import ReactDOM from 'react-dom/client';
import reducer, { initialState } from './Components/Reducer';
import { StateProvider } from './Components/StateProvider';
import "./index.css"
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  </React.StrictMode>
);

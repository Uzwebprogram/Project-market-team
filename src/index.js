import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { BrowserRouter as Router} from "react-router-dom"
import { LoginProvider } from './Context/Auth'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
      <App />
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


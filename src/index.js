//Entry point to app. This is the first file React looks for when starting the app.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import app component
import App from './App'

//render application 
const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

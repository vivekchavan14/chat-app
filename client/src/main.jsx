import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <ToastContainer
        autoClose={5000} // Set auto close time to 5000ms (5 seconds)
        hideProgressBar={true} // Hide the progress bar
        // Add any other props you need from toast.configure
      />
    </BrowserRouter>
    
  </React.StrictMode>,
)

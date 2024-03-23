import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; // Import the ToastContainer component

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        autoClose={5000} // Set auto close time to 5000ms (5 seconds)
        hideProgressBar={true} // Hide the progress bar
        // Add any other props you need from toast.configure
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

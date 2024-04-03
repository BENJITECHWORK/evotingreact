import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
// import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </QueryClientProvider>
)

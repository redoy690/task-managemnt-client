import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Router.jsx';
import AuthProviers from './providers/AuthProviers.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviers>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProviers>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Route/Router.jsx'
import './index.css'
import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import theme from './Theme/Dark.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider value={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Pricing from './routes/Pricing.jsx';
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/login', element: <Login /> }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />
)

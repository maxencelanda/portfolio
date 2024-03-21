import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import bob from './assets/saturatedbob.png'

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"

import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
    {
      path: '/',
      element: <Home/>,
    },
    ],
    
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import bob from './assets/saturatedbob.png'

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"

import Home from './components/Home.jsx'
import Accueil from './components/Accueil.jsx'
import ProjetsEPSI from './components/ProjetsEPSI.jsx'
import ProjetsPerso from './components/ProjetsPerso.jsx'
import Rapport from './components/Rapport.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home title="Accueil" content={<Accueil/>}/>,
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  },
  {
    path: '/projetsepsi',
    element: <Home title="Projets EPSI" content={<ProjetsEPSI/>}/>,
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  }, 
  {
    path: '/projetsperso',
    element: <Home title="Projets Perso" content={<ProjetsPerso/>}/>,
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  }, 
  {
    path: '/rapports',
    element: <Home title="Projets Rapport" content={<Rapport/>}/>,
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

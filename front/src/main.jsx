import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import bob from './assets/images/saturatedbob.png'

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"

import Home from './components/Home.jsx'
import Accueil from './components/Accueil.jsx'
import Projets from './components/Projets.jsx'
import Rapport from './components/Document.jsx'
/*
import Patrimoine from './components/Categorie/Patrimoine.jsx'

import Agenda from './components/Projets/Agenda.jsx'
import ECommerceBTS from './components/Projets/ECommerceBTS.jsx'
import TourDeFrance from './components/Projets/TourDeFrance.jsx'
import StockApp from './components/Projets/StockApp.jsx'
import ECommerceReact from './components/Projets/ECommerceReact.jsx'
import Epsilon from './components/Projets/Epsilon.jsx'
import Reseau from './components/Projets/Reseau.jsx'
import Echec from './components/Projets/Echec.jsx'
import Incident from './components/Categorie/Incident.jsx'
import Presence from './components/Categorie/Presence.jsx'
import TravailProjet from './components/Categorie/TravailProjet.jsx'
import Disposition from './components/Categorie/Disposition.jsx'
import Developpement from './components/Categorie/Developpement.jsx'
*/
import Stage from './components/Stage.jsx'
import Realisations from './components/Realisations.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home title="Accueil" content={<Accueil/>}/>,
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  },
  {
    path: '/projets',
    element: <Home title="Projets" content={<Projets/>}/>,
  },
  {
    path: '/realisations',
    element: <Home title="Realisations" content={<Realisations/>}/>,
  }, 
  {
    path: '/documents',
    element: <Home title="Documents" content={<Rapport/>}/>,
  },
  {
    path: '/stages',
    element: <Home title="Stages" content={<Stage/>}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import bob from './assets/saturatedbob.png'

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"

import Home from './components/Home.jsx'
import Accueil from './components/Accueil.jsx'
import ProjetsEPSI from './components/ProjetsEPSI.jsx'
import Competence from './components/Competence.jsx'
import Rapport from './components/Document.jsx'

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
import Stage from './components/Stage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home title="Accueil" content={<Accueil/>}/>,
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  },
  {
    path: '/projetsepsi',
    element: <Home title="Projets EPSI" content={<ProjetsEPSI/>}/>,
  },
  {
    path: '/competence',
    element: <Home title="Competences" content={<Competence/>}/>,
  }, 
  {
    path: '/documents',
    element: <Home title="Documents" content={<Rapport/>}/>,
  },
  {
    path: '/stages',
    element: <Home title="Stages" content={<Stage/>}/>,
  },
  {
    path: '/patrimoine',
    element: <Home title="Gérer le patrimoine informatique" content={<Patrimoine/>}/>,
  },
  {
    path: '/incident',
    element: <Home title="Répondre aux incidents et demandes d’assistance et d’évolution" content={<Incident/>}/>,
  },
  {
    path: '/presence',
    element: <Home title="Développer la présence en ligne de l’organisation" content={<Presence/>}/>,
  },
  {
    path: '/travailprojet',
    element: <Home title="Travailler en mode projet." content={<TravailProjet/>}/>,
  },
  {
    path: '/disposition',
    element: <Home title="Mettre à disposition des utilisateurs un service informatique" content={<Disposition/>}/>,
  },
  {
    path: '/developpement',
    element: <Home title="Organiser son développement professionnel" content={<Developpement/>}/>,
  },
  {
    path: '/projetsepsi/agenda',
    element: <Home title="Projet Agenda" content={<Agenda/>}/>,
  },
  {
    path: '/projetsepsi/btsecommerce',
    element: <Home title="Projet BTS ACME" content={<ECommerceBTS/>}/>,
  },
  {
    path: '/projetsepsi/tdf',
    element: <Home title="Tour de France" content={<TourDeFrance/>}/>,
  },
  {
    path: '/projetsepsi/stock',
    element: <Home title="Projet BTS Stock" content={<StockApp/>}/>,
  },
  {
    path: '/projetsepsi/ecommercereact',
    element: <Home title="E-Commerce React" content={<ECommerceReact/>}/>,
  },
  {
    path: '/projetsepsi/epsilon',
    element: <Home title="Epsilon" content={<Epsilon/>}/>,
  },
  {
    path: '/projetsepsi/architecture',
    element: <Home title="Projet Architecture Reseau" content={<Reseau/>}/>,
  },
  {
    path: '/projetsepsi/echec',
    element: <Home title="Echec" content={<Echec/>}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

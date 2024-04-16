import { Link } from "react-router-dom";

export default function ProjetsEPSI() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <ul className="mr-24">
          <li className="my-2 py-2 border-b border-black"><Link to="/patrimoine">Gérer le patrimoine informatique</Link></li>
          <li className="my-2 py-2 border-b border-black"><Link to="">Répondre aux incidents et aux demandes d'assistance et d'évolution</Link></li>
          <li className="my-2 py-2 border-b border-black"><Link to="">Développer la présence en ligne de l'organisation</Link></li>
          <li className="my-2 py-2 border-b border-black"><Link to="">Travailler en mode projet</Link></li>
          <li className="my-2 py-2 border-b border-black"><Link to="">Mettre à disposition des utilisateurs un service informatique</Link></li>
          <li className="my-5"><Link to="">Organiser son développement professionnel</Link></li>
        </ul>
      </div>
      <div className="w-1/6">
        <ul>
          <li><Link to="/projetsepsi/agenda" className="underline">Projet Agenda (SN1)</Link></li>
        </ul>
      </div>
    </div>
  )
}

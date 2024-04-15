import { Link } from "react-router-dom";

export default function ProjetsEPSI() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <ul>
          <li>Compétence</li>
          <li>Compétence</li>
          <li>Compétence</li>
          <li>Compétence</li>
          <li>Compétence</li>
          <li>Compétence</li>
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

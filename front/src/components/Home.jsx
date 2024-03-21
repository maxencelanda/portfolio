/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Home({ title, content }) {

  return (
    <div className="p-5 w-full h-screen bg-gray-200 font-sen">
      <div className="grid grid-cols-5 gap-2">
        <p className="text-3xl font-sulphur">MAXENCE LANDA</p>
        <Link to="/" className="text-center hover:underline">Accueil</Link>
        <Link to="/projetsepsi" className="text-center hover:underline">Projets EPSI</Link>
        <Link to="/projetsperso" className="text-center hover:underline">Projets Perso</Link>
        <Link to="/rapports" className="text-center hover:underline">Rapport stage</Link>        
      </div>
      <div className="flex">
        <div className="w-1/6">
          <p className="text-xl font-sulphur">BTS SIO SLAM</p>
          <p className="mt-20">Github</p>
          <p className="mt-20">Linkedin</p>
        </div>
        <div className="w-5/6 mx-auto">
          <div className="col-span-5 m-10 text-center">{title}</div>
          <div className="col-span-5 m-10">{ content }</div>
        </div>
      </div>       
    </div>

  )
}

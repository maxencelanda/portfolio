import { Link } from "react-router-dom";

export default function Home({ title, content }) {

  return (
    <div className="p-5 w-full h-screen bg-gray-200 font-sen">
      <div className="grid grid-cols-6 gap-2">
        <p className="text-3xl font-sulphur">MAXENCE LANDA</p>
        <Link to="/" className="text-center hover:underline">Accueil</Link>
        <Link to="/projetsepsi" className="text-center hover:underline">Projets EPSI</Link>
        <Link to="/projetsperso" className="text-center hover:underline">Projets Perso</Link>
        <Link to="/rapports" className="text-center hover:underline">Rapport stage</Link>
        <div></div>
        <p className="text-xl font-sulphur">BTS SIO SLAM</p>
        <div className="col-span-5 m-10 text-center">{title}</div>
        <p className="">Github</p>
        <div className="col-span-5 m-10">{ content }</div>
        <p className="">Linkedin</p>
      </div>        
    </div>
  )
}

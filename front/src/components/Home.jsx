/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import githubImg from "../assets/github.webp";
import linkedImg from "../assets/linkedin.webp";

export default function Home({ title, content }) {

  return (
    <div className="p-5 w-full h-screen bg-gray-200 font-sen">
      <div className="grid grid-cols-5 gap-2">
        <p className="text-3xl font-sulphur">MAXENCE LANDA</p>
        <Link to="/" className="text-center hover:underline">Accueil</Link>
        <Link to="/projetsepsi" className="text-center hover:underline">Projets EPSI</Link>
        <Link to="/competence" className="text-center hover:underline">Competences</Link>
        <Link to="/rapports" className="text-center hover:underline">Rapport stage</Link>        
      </div>
      <div className="flex">
        <div className="w-1/6">
          <p className="text-xl font-sulphur">BTS SIO SLAM</p>
          <div className="mt-20 flex">
            <Link to="https://github.com/maxencelanda" target="_blank" rel="noopener noreferrer" className="flex">
              <img src={githubImg} className="w-8"></img>
              <p className="mx-2">Github</p>
            </Link>
          </div>
          <div className="mt-20 flex">
            <Link to="https://www.linkedin.com/in/maxence-landa-184122293/" target="_blank" rel="noopener noreferrer" className="flex">
              <img src={linkedImg} className="w-8"></img>
              <p className="mx-2">Linkedin</p>
            </Link>
          </div>
        </div>
        <div className="w-5/6 mx-auto">
          <div className="col-span-5 m-10 text-center">{title}</div>
          <div className="col-span-5 m-10">{ content }</div>
        </div>
      </div>       
    </div>

  )
}

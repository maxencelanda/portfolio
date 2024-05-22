/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import githubImg from "../assets/images/github.webp";
import linkedImg from "../assets/images/linkedin.webp";

export default function Home({ title, content }) {

  return (
    <div className="min-h-screen bg-gray-50 font-sen text-2xl">
      <div className="grid grid-cols-7 p-5 gap-2 bg-gray-200 sticky top-0">
        <p className="text-3xl font-sulphur">MAXENCE LANDA<br></br><p className="text-xl">BTS SIO SLAM</p></p>
        <Link to="/" className="text-center hover:underline">Accueil</Link>
        <Link to="/realisations" className="text-center hover:underline">Realisations</Link>
        <Link to="/projets" className="text-center hover:underline">Competences</Link>
        <Link to="/documents" className="text-center hover:underline">Documents</Link>
        <Link to="/stages" className="text-center hover:underline">Stages</Link>
        <Link to="/veille" className="text-center hover:underline">Veille</Link>
      </div>
      <div className="flex">
        <div className="w-1/6 ml-5">
          <div className="mt-20 flex">
            <Link to="https://github.com/maxencelanda" target="_blank" rel="noopener noreferrer" className="flex">
              <img src={githubImg} className="w-8"></img>
              <p className="mx-5">Github</p>
            </Link>
          </div>
          <div className="mt-20 flex">
            <Link to="https://www.linkedin.com/in/maxence-landa-184122293/" target="_blank" rel="noopener noreferrer" className="flex">
              <img src={linkedImg} className="w-8"></img>
              <p className="mx-5">Linkedin</p>
            </Link>
          </div>
        </div>
        <div className="w-5/6 mx-auto">
          <div className="col-span-5 m-10 text-center font-semibold">{title}</div>
          <div className="col-span-5 m-10">{ content }</div>
        </div>
      </div>       
    </div>

  )
}

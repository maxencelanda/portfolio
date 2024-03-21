import { useState } from "react"

export default function Home() {

  const [page, setPage] = useState("Welcome");
  
  return (
    <div className="p-5 w-full h-screen bg-gray-200 font-sen">
      <div className="grid grid-cols-6">
        <p className="text-3xl font-sulphur">MAXENCE LANDA</p>
        <button>Accueil</button>
        <button>Projets EPSI</button>
        <button>Projets Perso</button>
        <button>Rapport stage</button>
        <div></div>
        <p className="text-xl font-sulphur">BTS SIO SLAM</p>
        <div className="col-span-5 m-10 text-center">Titre</div>
        <p className="">Github</p>
        <div className="col-span-5 m-10">Content</div>
        <p className="">Linkedin</p>
      </div>        
    </div>
  )
}

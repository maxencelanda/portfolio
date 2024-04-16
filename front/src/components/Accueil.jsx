import CompetenceCard from "./CompetenceCard";

import cv from "../assets/CV.pdf"

export default function Accueil() {

  return (
    <div className="">
        Bonjour, je suis Maxence Landa et j'ai pour objectif de devenir développeur en intelligence artificielle.
        <p className="text-center mt-20">CV</p>
        <a href={cv} download="CV_landa_maxence.pdf" className="mx-auto bg-white p-2 mt-5 rounded-lg border border-black hover:bg-slate-100">Télécharger CV</a>
    </div>
  )
}

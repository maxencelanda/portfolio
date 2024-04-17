import mcd from "../../assets/mcdTDF.png"
import githubTDF from "../../assets/githubTDF.png"
import pdffile from "../../assets/Projet Transversal Conception et administrationBD.pdf"

import Projet from "../Projet"

export default function TourDeFrance() {

  const desc = "Projet base de données Tour de France pour afficher coureurs, equipes, etapes etc... et les gérer avec un CRUD. Réalisé avec Ethan GENEVRIEZ et Anjara PRINGAULT"
  const outils = "Visual Studio Code, Github, Phpmyadmin, Postman"
  const technos = "NodeJS, MySQL, ReactJS, Python"

  return (
    <div>
      <Projet title="Projet BTS E-Commerce" images={[mcd, githubTDF]} description={desc} github={undefined} file={pdffile} outils={outils} technos={technos}></Projet>
    </div>
  )
}

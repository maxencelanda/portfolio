import crud from "../../assets/trelloEpsilon.png"

import Projet from "../Projet"

export default function Epsilon() {

  const desc = "Epsilon est un projet d'envoi de fichier avec authentification, ajout à la base de donnée et sauvegarde en local. Réalisé avec BOUSSEKEYT Vladimir."
  const outils = "Visual Studio Code, Github, Phpmyadmin, Trello"
  const technos = "Python FastAPI, MySQL, ReactJS"

  return (
    <div>
      <Projet title="Epsilon" images={[crud]} description={desc} github={"https://github.com/maxencelanda/epsilon-peer-learning"} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

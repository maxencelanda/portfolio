import imgAgenda from "../../assets/projetAgenda.png"
import githubAgenda from "../../assets/githubAgenda.png"


import Projet from "../Projet"

export default function Agenda() {

  const desc = "Agenda avec un CRUD pour ajouter des évènements, des groupes."
  const outils = "Visual Studio Code, Github"
  const technos = "PHP, MySQL"

  return (
    <div>
      <Projet title="Projet Agenda" images={[imgAgenda, githubAgenda]} description={desc} github={undefined} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

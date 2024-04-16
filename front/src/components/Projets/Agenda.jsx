import imgAgenda from "../../assets/projetAgenda.png"

import Projet from "../Projet"

export default function Agenda() {

  const desc = "Agenda réalisé en groupe."
  const outils = "Visual Studio Code, Github"
  const technos = "PHP, MySQL"

  return (
    <div>
      <Projet title="Projet Agenda" image={imgAgenda} description={desc} github={""} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

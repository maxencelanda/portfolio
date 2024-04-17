import fbs from "../../assets/echec.png"

import Projet from "../Projet"

export default function Echec() {

  const desc = "Application console de jeu d'échec en utilisant la programmation orientée objet."
  const outils = "Visual Studio Code"
  const technos = "Python"

  return (
    <div>
      <Projet title="Echec" images={[fbs]} description={desc} github={undefined} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

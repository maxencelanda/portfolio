import img1 from "../../assets/imageAD1.png"
import img2 from "../../assets/imageAD2.png"

import enonce from "../../assets/projetArchitectureReseau.pdf"

import Projet from "../Projet"

export default function Reseau() {

  const desc = "Projet réseau dans lequel j'ai réalisé un Active Directory et un script Powershell pour une infrastructure."
  const outils = "Oracle VM Virtualbox, Environnement Linux et Windows Server, Visual Studio Code"
  const technos = "Active Directory, Powershell"

  return (
    <div>
      <Projet title="Projet Architecture Reseau" images={[img1, img2]} description={desc} github={undefined} file={enonce} outils={outils} technos={technos}></Projet>
    </div>
  )
}

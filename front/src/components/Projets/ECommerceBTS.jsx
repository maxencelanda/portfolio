import crud from "../../assets/crudAcme.png"
import catalogue from "../../assets/catalogueACME.png"

import Projet from "../Projet"

export default function ECommerceBTS() {

  const desc = "Projet d'application web e-commerce pour vendre de la nourriture, avec une authentification, un catalogue, un panier, et un CRUD."
  const outils = "Visual Studio Code, Phpmyadmin, Github, Trello"
  const technos = "Symfony, MySQL"

  return (
    <div>
      <Projet title="Projet BTS E-Commerce" images={[catalogue, crud]} description={desc} github={"https://github.com/maxencelanda/projet-e-commerce"} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

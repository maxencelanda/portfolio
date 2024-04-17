import fbs from "../../assets/firebaseStock.png"

import Projet from "../Projet"

export default function StockApp() {

  const desc = "Application mobile pour voir, ajouter, modifier et supprimer des produits, des ingrédients et catégories."
  const outils = "Visual Studio Code, Github, Phpmyadmin, Trello, Firebase"
  const technos = "React Native, MySQL, Symfony"

  return (
    <div>
      <Projet title="Projet BTS Stock App" images={[fbs]} description={desc} github={"https://github.com/maxencelanda/stock-app-bts"} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

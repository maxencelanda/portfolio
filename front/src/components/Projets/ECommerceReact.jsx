import catalogue from "../../assets/ecommerceCatalogue.png"

import Projet from "../Projet"

export default function ECommerceReact() {

  const desc = "Site E-Commerce de vente de vêtements uniquement front-end utilisant les context en React."
  const outils = "Visual Studio Code, Github"
  const technos = "ReactJS"

  return (
    <div>
      <Projet title="E-Commerce Front-end" images={[catalogue]} description={desc} github={"https://github.com/maxencelanda/e-commerce-react-front"} file={undefined} outils={outils} technos={technos}></Projet>
    </div>
  )
}

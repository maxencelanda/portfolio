import { Link } from "react-router-dom";
import CategorieCard from "./CategorieCard";

export default function ProjetsEPSI() {
  return (
    <div className="">
      <div className="grid grid-cols-3">
          <Link to="/patrimoine" className="border-b border-black">Gérer le patrimoine informatique</Link>
          <Link to="/incident" className="border-b border-black">Répondre aux incidents et aux demandes d'assistance et d'évolution</Link>
          <Link to="/presence" className="border-b border-black">Développer la présence en ligne de l'organisation</Link>
          <Link to="/travailprojet" className="mt-5 border-b border-black">Travailler en mode projet</Link>
          <Link to="/disposition" className="mt-5 border-b border-black">Mettre à disposition des utilisateurs un service informatique</Link>
          <Link to="/developpement" className="mt-5 border-b border-black">Organiser son développement professionnel</Link>
      </div>
      <div className="mt-10">
        <ul>
          <CategorieCard title="Projet Agenda" desc="Projet Agenda réalisé avec PHP et MySQL." direction={"/projetsepsi/agenda"} />
          <CategorieCard title="Projet BTS E-Commerce" desc="Projet BTS réalisé avec Symfony et MySQL." direction={"/projetsepsi/btsecommerce"} />
          <CategorieCard title="Tour de France" desc="CRUD du Tour de France réalisé avec NodeJS et MySQL." direction={"/projetsepsi/tdf"} />
          <CategorieCard title="Projet BTS Stock App" desc="Application stock avec un CRUD pour gérer des produits." direction={"/projetsepsi/stock"} />
          <CategorieCard title="Epsilon" desc="Application web d'upload et sauvegarde de fichier en bdd et local." direction={"/projetsepsi/epsilon"} />
          <CategorieCard title="E-Commerce Front" desc="Site E-Commerce en front-end uniquement en utilisant useContext en React." direction={"/projetsepsi/ecommercereact"} />
          <CategorieCard title="Projet Architecture Reseau" desc="Architecture réseau avec Active Directory." direction={"/projetsepsi/architecture"} />
          <CategorieCard title="Echec" desc="Application console de jeu d'échec en utilisant la programmation orientée objet." direction={"/projetsepsi/echec"} />
        </ul>
      </div>
    </div>
  )
}

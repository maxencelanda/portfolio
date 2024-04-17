import CategorieCard from '../CategorieCard'

export default function TravailProjet() {
  return (
    <div>
      <CategorieCard title="Projet Agenda" desc="Projet Agenda réalisé avec PHP et MySQL. (Travail collaboratif sur Github)" direction={"/projetsepsi/agenda"} />
      <CategorieCard title="Projet BTS E-Commerce" desc="Projet BTS réalisé avec Symfony et MySQL. (Travail collaboratif sur Github et Trello)" direction={"/projetsepsi/btsecommerce"} />
      <CategorieCard title="Tour de France" desc="CRUD du Tour de France réalisé avec NodeJS et MySQL. (Travail collaboratif sur Github)" direction={"/projetsepsi/tdf"} />
      <CategorieCard title="Projet BTS Stock App" desc="Application stock avec un CRUD pour gérer des produits. (Travail collaboratif sur Github et Trello)" direction={"/projetsepsi/stock"} />
      <CategorieCard title="Epsilon" desc="Application web d'upload et sauvegarde de fichier en bdd et local. (Travail collaboratif sur Github et Trello)" direction={"/projetsepsi/epsilon"} />
      <CategorieCard title="Projet Architecture Reseau" desc="Architecture réseau avec Active Directory. (Travail collaboratif)" direction={"/projetsepsi/architecture"} />
    </div>
  )
}
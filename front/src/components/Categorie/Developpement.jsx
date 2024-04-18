import CategorieCard from '../CategorieCard'

export default function Developpement() {
  return (
    <div>
      <CategorieCard title="Projet Agenda" desc="Projet Agenda réalisé avec PHP et MySQL." direction={"/projetsepsi/agenda"} />
      <CategorieCard title="Projet BTS E-Commerce" desc="Projet BTS réalisé avec Symfony et MySQL." direction={"/projetsepsi/btsecommerce"} />
      <CategorieCard title="Tour de France" desc="CRUD du Tour de France réalisé avec NodeJS et MySQL." direction={"/projetsepsi/tdf"} />
      <CategorieCard title="Projet BTS Stock App" desc="Application stock avec un CRUD pour gérer des produits." direction={"/projetsepsi/stock"} />
      <CategorieCard title="Epsilon" desc="Application web d'upload et sauvegarde de fichier en bdd et local." direction={"/projetsepsi/epsilon"} />
      <CategorieCard title="E-Commerce Front" desc="Site E-Commerce en front-end uniquement en utilisant useContext en React." direction={"/projetsepsi/ecommercereact"} />
      <CategorieCard title="Projet Architecture Reseau" desc="Architecture réseau avec Active Directory." direction={"/projetsepsi/architecture"} />
      <CategorieCard title="Echec" desc="Application console de jeu d'échec en utilisant la programmation orientée objet." direction={"/projetsepsi/echec"} />
    </div>
  )
}
import CategorieCard from '../CategorieCard'

export default function Patrimoine() {
  return (
    <div>
      <CategorieCard title="Projet Agenda" desc="Projet Agenda réalisé avec PHP et MySQL." direction={"/projetsepsi/agenda"} />
      <CategorieCard title="Projet BTS E-Commerce" desc="Projet BTS réalisé avec Symfony et MySQL." direction={"/projetsepsi/btsecommerce"} />
      <CategorieCard title="Tour de France" desc="CRUD du Tour de France réalisé avec NodeJS et MySQL." direction={"/projetsepsi/tdf"} />
      <CategorieCard title="Projet BTS Stock App" desc="Application stock avec un CRUD pour gérer des produits." direction={"/projetsepsi/stock"} />
      <CategorieCard title="Epsilon" desc="Application web d'upload et sauvegarde de fichier en bdd et local." direction={"/projetsepsi/epsilon"} />
      <CategorieCard title="Projet Architecture Reseau" desc="Architecture réseau avec Active Directory." direction={"/projetsepsi/architecture"} />
    </div>
  )
}
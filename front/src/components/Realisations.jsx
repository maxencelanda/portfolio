import projets from "../data/projets.json"
import Projet from "./Projet"

export default function Realisations() {
  return (
    <div>
        {
        Object.keys(projets).map((proj, i) => {
            console.log(projets[proj])
            return (
                <div className="text-center my-2 bg-slate-200 border border-black rounded-md mx-6 align-text-bottom">
                    <Projet title={proj} description={projets[proj].description} debut={projets[proj].dateDebut} fin={projets[proj].dateFin} images={projets[proj].images} outils={projets[proj].outils} technos={projets[proj].technos} />
                </div>
            )
        })
        }
    </div>
  )
}

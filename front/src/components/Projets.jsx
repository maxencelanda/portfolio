import competences from "../data/competences.json"

import CategorieCard from "./CategorieCard";
import { useEffect, useState } from "react";

export default function Projets() {

  const [images, setImages] = useState([]);
  const [categ, setCateg] = useState("Gérer le patrimoine informatique")

  useEffect(() => {
    const loadImages = async () => {
        const modules = import.meta.glob('../assets/images/*');
        const imagePaths = [];
        for (const path in modules) {
            const module = await modules[path]();
            imagePaths.push(module.default);
        }
        setImages(imagePaths);
    };

    loadImages();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-3">
        {
        Object.keys(competences).map((comp, i) => {
          return (
            <div className={"text-center my-2 bg-slate-200 border border-black rounded-md mx-6 align-text-bottom " + (categ == comp ? "bg-slate-400" : "")} onClick={() => setCateg(comp)}>
              {comp}
            </div>
            )
        })
        }
      </div>
      <div className="mt-10">
        {
          Object.keys(competences).map((comp, i) => {
            if (comp == categ){
              return (
              <div>
                {
                competences[comp].projets.map((proj, y) => {
                  const imgsCard = <div className="grid grid-cols-2">
                    {
                      proj.images.map((img) => {
                        return(
                          <div>
                            <img src={"/src/assets/images/" + img} className="w-1/2 mx-auto max-h-[900px] object-cover col-span-1"></img>
                          </div>
                        )
                      })
                    }
                  </div>
                  return(
                    <CategorieCard key={y} title={proj.projet} desc={proj.justification} imagesCard={imgsCard}/>
                  )
                }
                )
                }
              </div>
              )
            }
          })
        }
        
      </div>
    </div>
  )
}

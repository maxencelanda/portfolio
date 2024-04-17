import { Link } from "react-router-dom"

export default function Projet({title, images, description, github, file, outils, technos}) {
  return (
    <div>
        <div className="flex">
        <div className="ml-5">
            <p>{description}</p>
            <p className="my-5">Outils utilisés: {outils}</p>
            <p>Technologies: {technos}</p>
            <div className="grid grid-cols-2 gap-5">
              {images.map((image, i) =>
                <img src={image} key={i} className="max-h-64 my-5"></img>
              )}
            </div>
        </div>
      </div>
      {github ? <p className="mt-10">Github: <Link to={github}>{github}</Link></p> : null}
      {file ? <a href={file} download={file} className="mx-auto bg-white p-2 mt-5 rounded-lg border border-black hover:bg-slate-100">Télécharger l'énoncé du projet</a> : null}
    </div>
  )
}

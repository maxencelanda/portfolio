import { Link } from "react-router-dom"

export default function Projet({title, image, description, github, file, outils, technos}) {
  return (
    <div>
        <div className="flex">
        <img src={image} className="w-1/2"></img>
        <div className="ml-5 w-1/2">
            <p>{description}</p>
            <p className="my-5">Outils utilisés: {outils}</p>
            <p>Technologies: {technos}</p>
        </div>
      </div>
      {github ? <p className="mt-10">Github:<Link to={github}></Link></p> : null}
      {file ? <Link to={file}></Link> : null}
    </div>
  )
}

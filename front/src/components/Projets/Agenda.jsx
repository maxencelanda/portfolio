import imgAgenda from "../../assets/projetAgenda.png"
import { Link } from "react-router-dom"

export default function Agenda() {
  return (
    <div>
        <div className="flex">
        <img src={imgAgenda} className="w-1/2"></img>
        <div className="ml-5 w-1/2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis necessitatibus quibusdam, voluptatum porro sapiente hic quasi culpa ad consequuntur autem magni animi distinctio ducimus quia laboriosam vero assumenda? Ratione, exercitationem.</p>
        </div>
      </div>
      <p className="mt-10">Github:<Link></Link></p>
    </div>
  )
}

import CompetenceCard from "./CompetenceCard";

export default function Accueil() {

  const devBackSkills = ["PHP (Symfony)", "Javascript (NodeJS)", "Python (Flask, FastAPI)", "RESTful APIs"]
  const devFrontSkills = ["HTML/CSS", "Bootstrap, Tailwind", "JavaScript (ReactJS)"]
  const sgbd = ["MariaDB", "MongoDB", "Firebase", "SQL Server", "SQLite"]
  const versionning = ["Git"]

  return (
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim assumenda fugit qui recusandae illo autem blanditiis commodi voluptas nisi eos, eum repellendus ea impedit tempora repellat neque, adipisci dicta at.
        <p className="text-center mt-20">Compétences</p>
        <div className="flex mt-10">
          <CompetenceCard title={"Développement Back-End"} skills={devBackSkills}/>
          <CompetenceCard title={"Développement Front-End"} skills={devFrontSkills}/>
          <CompetenceCard title={"Systèmes Gestion Base de Données"} skills={sgbd}/>
          <CompetenceCard title={"Versionning"} skills={versionning}/>
        </div>
    </div>
  )
}

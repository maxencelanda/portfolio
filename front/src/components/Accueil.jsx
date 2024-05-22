import CompetenceCard from "./CompetenceCard";

export default function Accueil() {

  const devBackSkills = ["PHP (Symfony)", "Javascript (NodeJS, ExpressJS)", "Python (Flask, FastAPI)", "RESTful APIs"]
  const devFrontSkills = ["HTML/CSS", "Bootstrap, Tailwind", "JavaScript (ReactJS)"]
  const sgbd = ["SQL", "Transact-SQL", "Firebase", "MongoDB"]
  const versionning = ["Git"]

  return (
    <div>
      <div className="w-4/5 mx-auto">
          Bonjour, je suis Maxence Landa, étudiant à l'EPSI Lille et passionné d'informatique depuis de nombreuses années. J'ai pour objectif de devenir développeur en intelligence artificielle ou en data décisionnelle.
      </div>
      <p className="col-span-5 m-10 text-center font-semibold">Competences</p>
      <div className="flex mt-10">
        <CompetenceCard title={"Développement Back-End"} skills={devBackSkills}/>
        <CompetenceCard title={"Développement Front-End"} skills={devFrontSkills}/>
        <CompetenceCard title={"Base de Données"} skills={sgbd}/>
        <CompetenceCard title={"Versionning"} skills={versionning}/>
      </div>
    </div>
    
  )
}

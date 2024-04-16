import React from 'react'
import CompetenceCard from './CompetenceCard'

export default function Competence() {

    const devBackSkills = ["PHP (Symfony)", "Javascript (NodeJS)", "Python (Flask, FastAPI)", "RESTful APIs"]
    const devFrontSkills = ["HTML/CSS", "Bootstrap, Tailwind", "JavaScript (ReactJS)"]
    const sgbd = ["MySQL", "MongoDB", "Firebase", "SQL Server", "SQLite"]
    const versionning = ["Git"]

    return (
        <div className="flex mt-10">
            <CompetenceCard title={"Développement Back-End"} skills={devBackSkills}/>
            <CompetenceCard title={"Développement Front-End"} skills={devFrontSkills}/>
            <CompetenceCard title={"Systèmes Gestion Base de Données"} skills={sgbd}/>
            <CompetenceCard title={"Versionning"} skills={versionning}/>
        </div>
    )
}
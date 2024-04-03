export default function CompetenceCard({title, skills}) {
  return (
    <div className="w-1/4 border border-black bg-white shadow-xl rounded-lg mx-5 overflow-hidden">
      <p className="text-center border-b border-black bg-slate-300">{title}</p>
      <ul className="mx-1 my-1">
        {skills.map((skill, i) =>
          <li key={i}>{skill}</li>
        )}
      </ul>
    </div>
  )
}

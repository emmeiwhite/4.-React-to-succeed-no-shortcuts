export default function ProfileCard({ img, name, about, skills }) {
  return (
    <div>
      <img
        src={img}
        alt={name}
      />
      <h1>{name}</h1>
      <p>{about}</p>

      <div className="skill-wrapper">
        {skills.map(skill => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  )
}

function Skill({ skill }) {
  const { skillName, color, level } = skill
  return (
    <div
      style={{ backgroundColor: color }}
      className="skill-card">
      <h3>{skillName}</h3>
      <span>Level: {level}</span>
    </div>
  )
}

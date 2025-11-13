export default function ProfileCard({ img, name, about, skills }) {
  return (
    <div>
      <img
        src={img}
        alt={name}
      />
      <h1>{name}</h1>
      <p>{about}</p>

      {skills.map(skill => (
        <Skill skillName={skill} />
      ))}
    </div>
  )
}

function Skill({ skillName }) {
  return <div>{skillName}</div>
}

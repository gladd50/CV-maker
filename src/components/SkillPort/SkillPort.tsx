type SkillPortProps = {
  data: string[]
}

export default function SkillPort(props: SkillPortProps) {
  const { data } = props
  return (
    data[0] !== "" && (
      <div className="skills-port-cont list-port">
        <div className="header">
          <h3 className="skills-header">Skills</h3>
        </div>
        <ul className="skill-list">
          <li className="skills">{data[0]}</li>
          <li className="skills">{data[1]}</li>
          <li className="skills">{data[2]}</li>
          <li className="skills">{data[3]}</li>
        </ul>
      </div>
    )
  )
}

type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}
type Experience = Education & {
  desc: string
}
type ExperiencePortProps = {
  ExData: Experience[]
}

export default function ExperiencePort(props: ExperiencePortProps) {
  const { ExData } = props
  return (
    ExData[0].major !== "" && (
      <div className="works-port-cont list-port">
        <div className="header">
          <h3 className="works-header">Experience</h3>
        </div>
        <ul className="works-list" role="list">
          {ExData.map((data, idx) => (
            <li className="works" key={idx}>
              <h3 className="works-major">{data.major}</h3>
              <p className="works-institution">
                {data.institution} {data.startDate}-{data.endDate}
              </p>
              <p className="works-desc">{data.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

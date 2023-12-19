type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}

type EducationPortProps = {
  eduData: Education[]
}

export default function EducationPort(props: EducationPortProps) {
  const { eduData } = props
  return (
    eduData[0].major !== "" && (
      <div className="educations-port-cont list-port">
        <div className="header">
          <h3 className="educations-header">Education</h3>
        </div>
        <ul className="educations-list" role="list">
          {eduData.map((data, idx) => (
            <li className="educations" key={idx}>
              <h3 className="educations-major">{data.major}</h3>
              <p className="educations-institution">
                {data.institution} | {data.startDate} - {data.endDate}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

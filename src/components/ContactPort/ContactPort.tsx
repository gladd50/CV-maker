type ContactPortProps = {
  data: string[]
}

export default function ContactPort(props: ContactPortProps) {
  const { data } = props
  return (
    data[0] !== "" && (
      <div className="contact-port-cont list-port">
        <div className="header">
          <h3 className="contact-header">Contact</h3>
        </div>
        <ul className="skill-list" role="list">
          <li className="contact">{data[0]}</li>
          <li className="contact">{data[1]}</li>
          <li className="contact">{data[2]}</li>
          <li className="contact">{data[3]}</li>
        </ul>
      </div>
    )
  )
}

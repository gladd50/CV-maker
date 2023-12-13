import "./PersonalPortStyle.css"

type PersonalPortProps = {
  name: string
  role: string
  desc: string
}

export default function PersonalPort(props: PersonalPortProps) {
  const { name, role, desc } = props
  return (
    <div className="header-port-cont">
      <h1 className="name-port">{name}</h1>
      <h2 className="role-port">{role}</h2>
      <p className="profile">{desc}</p>
    </div>
  )
}

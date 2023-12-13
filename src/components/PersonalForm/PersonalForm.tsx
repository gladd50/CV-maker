import "./PersonalFormStyle.css"
import { ChangeEvent } from "react"

type PersonalFormProps = {
  changeName: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
  changeRole: (e: ChangeEvent<HTMLInputElement>) => void
  role: string
  changeDesc: (e: ChangeEvent<HTMLTextAreaElement>) => void
  desc: string
}

export default function PersonalForm(props: PersonalFormProps) {
  const { changeName, name, changeRole, role, changeDesc, desc } = props
  return (
    <div className="form-personal-cont">
      <h2>Personal Informations</h2>
      <form className="personal-form">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          id="fullname"
          name="personal"
          placeholder="Your fullname"
          onChange={changeName}
          value={name}
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="personal"
          placeholder="Your role"
          onChange={changeRole}
          value={role}
        />
        <label htmlFor="profile">Profile</label>
        <textarea
          name="personal"
          id="profile"
          rows={3}
          placeholder="Your profile information"
          onChange={changeDesc}
          value={desc}
        ></textarea>
      </form>
    </div>
  )
}

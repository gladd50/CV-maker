import "./App.css"
import PersonalForm from "./components/PersonalForm/PersonalForm.tsx"
import ClearButton from "./components/ClearButton/ClearButton.tsx"
import LoadButton from "./components/LoadButton/LoadButton.tsx"
import SkillDrop from "./components/SkillDrop/SkillDrop.tsx"
import EducationDrop from "./components/EducationDrop/EducationDrop.tsx"
import ExperienceDrop from "./components/ExperienceDrop/ExperienceDrop.tsx"
import ContactDrop from "./components/ContactDrop/ContactDrop.tsx"
import PersonalPort from "./components/PersonalPort/PersonalPort.tsx"
import SkillPort from "./components/SkillPort/SkillPort.tsx"
import EducationPort from "./components/EducationPort/EducationPort.tsx"
import ExperiencePort from "./components/ExperiencePort/ExperiencePort.tsx"
import ContactPort from "./components/ContactPort/ContactPort.tsx"
import data from "./utils/defaultData.ts"
import { ChangeEvent, useState } from "react"

function App() {
  const [name, setName] = useState<string>(data.header.name)
  const [role, setRole] = useState<string>(data.header.role)
  const [personalDesc, setPersonalDesc] = useState<string>(data.header.desc)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)

  const handleChangeRole = (e: ChangeEvent<HTMLInputElement>) =>
    setRole(e.target.value)

  const handleChangePDesc = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setPersonalDesc(e.target.value)

  return (
    <div className="app">
      <section className="form-port-cont">
        <div className="feat-btn-cont">
          <ClearButton></ClearButton>
          <LoadButton></LoadButton>
        </div>
        <PersonalForm
          changeName={handleChangeName}
          name={name}
          changeRole={handleChangeRole}
          role={role}
          changeDesc={handleChangePDesc}
          desc={personalDesc}
        ></PersonalForm>
        <SkillDrop></SkillDrop>
        <EducationDrop></EducationDrop>
        <ExperienceDrop></ExperienceDrop>
        <ContactDrop></ContactDrop>
      </section>
      <section className="port-cont">
        <PersonalPort
          name={name}
          role={role}
          desc={personalDesc}
        ></PersonalPort>
        <SkillPort></SkillPort>
        <EducationPort></EducationPort>
        <ExperiencePort></ExperiencePort>
        <ContactPort></ContactPort>
      </section>
    </div>
  )
}

export default App

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
import { data, emptyData } from "./utils/defaultData.ts"
import { ChangeEvent, useState } from "react"

function App() {
  type Education = {
    major: string
    institution: string
    startDate: string
    endDate: string
  }
  type Experience = Education & {
    desc: string
  }
  const [name, setName] = useState<string>(data.header.name)
  const [role, setRole] = useState<string>(data.header.role)
  const [personalDesc, setPersonalDesc] = useState<string>(data.header.desc)
  const [education, setEducation] = useState<Education[]>(data.education)
  const [experience, setExperience] = useState<Experience[]>(data.experience)
  const [contact, setContact] = useState<string[]>(data.contact)
  const [skill, setSkill] = useState<string[]>(data.skill)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)

  const handleChangeRole = (e: ChangeEvent<HTMLInputElement>) =>
    setRole(e.target.value)

  const handleChangePDesc = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setPersonalDesc(e.target.value)

  const handleLoadExample = () => {
    setName(data.header.name)
    setRole(data.header.role)
    setPersonalDesc(data.header.desc)
    setEducation(data.education)
    setExperience(data.experience)
    setContact(data.contact)
    setSkill(data.skill)
  }
  const handleClearPort = () => {
    setName(emptyData.header.name)
    setRole(emptyData.header.role)
    setPersonalDesc(emptyData.header.desc)
    setEducation(emptyData.education)
    setExperience(emptyData.experience)
    setContact(emptyData.contact)
    setSkill(emptyData.skill)
  }
  return (
    <div className="app">
      <section className="form-port-cont">
        <div className="feat-btn-cont">
          <ClearButton onClear={handleClearPort}></ClearButton>
          <LoadButton onLoad={handleLoadExample}></LoadButton>
        </div>
        <PersonalForm
          changeName={handleChangeName}
          name={name}
          changeRole={handleChangeRole}
          role={role}
          changeDesc={handleChangePDesc}
          desc={personalDesc}
        ></PersonalForm>
        <SkillDrop
          data={skill}
          setSkill={(val: string[]) => setSkill(val)}
        ></SkillDrop>
        <EducationDrop
          data={education}
          setEdu={(val: Education[]) => setEducation(val)}
        ></EducationDrop>
        <ExperienceDrop
          data={experience}
          setEx={setExperience}
        ></ExperienceDrop>
        <ContactDrop
          data={contact}
          setCont={(val: string[]) => setContact(val)}
        ></ContactDrop>
      </section>
      <section className="port-cont">
        <PersonalPort
          name={name}
          role={role}
          desc={personalDesc}
        ></PersonalPort>
        <SkillPort data={skill}></SkillPort>
        <EducationPort eduData={education}></EducationPort>
        <ExperiencePort ExData={experience}></ExperiencePort>
        <ContactPort data={contact}></ContactPort>
      </section>
    </div>
  )
}

export default App

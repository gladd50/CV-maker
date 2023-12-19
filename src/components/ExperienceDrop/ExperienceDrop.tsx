import { useState } from "react"
import ExperienceDropForm from "./ExperienceDropForm"

type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}
type Experience = Education & {
  desc: string
}
type ExperienceDropProps = {
  data: Experience[]
  setEx: (val: Experience[]) => void
}
export default function ExperienceDrop(props: ExperienceDropProps) {
  const { data, setEx } = props

  const defaultData: Experience = {
    major: "",
    institution: "",
    startDate: "",
    endDate: "",
    desc: "",
  }

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false)
  const [whichOpen, setWhichOpen] = useState<boolean>(false)
  const [dataIndex, setDataIndex] = useState<number>(0)

  const modData: Experience[] = [defaultData, ...data]

  const handleDropEdu = () => {
    setIsOpenMenu(!isOpenMenu)
    setTimeout(() => {
      document.querySelector(".drop-animate-exp")?.classList.add("active")
    }, 0)
  }
  const handleDropForm = () => {
    setIsOpenForm(!isOpenForm)
    setIsOpenMenu(false)
    setWhichOpen(true)
    setDataIndex(0)
    setTimeout(() => {
      document.querySelector(".drop-animate-exp")?.classList.add("active")
    }, 0)
  }
  const handleChangeSchool = (idx: number) => {
    handleDropForm()
    setDataIndex(idx)
  }
  const handleSave = (sv: Experience) => {
    const savedData: Experience[] = [...data]
    if (dataIndex === 0) {
      savedData.unshift(sv)
    }
    savedData[dataIndex - 1] = sv
    setEx(savedData)
  }
  const handleDelete = (idx: number) => {
    const savedData: Experience[] = [...data]
    savedData.splice(idx - 1, 1)
    setEx(savedData)
  }
  const handleCancel = () => {
    setIsOpenForm(false)
    setIsOpenMenu(false)
    setWhichOpen(false)
  }
  return (
    <div className="experience-drop drop">
      <button
        className={`add-experience-cont add ${
          (isOpenMenu || isOpenForm) && "drop-open"
        }`}
        onClick={whichOpen ? handleDropForm : handleDropEdu}
      >
        <div className="btn-cont">
          <i className="fa-solid fa-briefcase"></i>
          <h2 className="experience-title">Experiece</h2>
        </div>
        <i
          className={`fa-solid fa-angle-down ${
            (isOpenMenu || isOpenForm) && "rotate"
          }`}
        ></i>
      </button>
      {isOpenMenu && (
        <div className="drop-animate-exp">
          {data[0].major !== "" &&
            data.map((data, index) => {
              return (
                <button
                  key={index}
                  className="add-list add"
                  onClick={() => handleChangeSchool(index + 1)}
                >
                  <p>{data.institution}</p>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              )
            })}
          <button className="open-form">
            <div className="open-btn" onClick={handleDropForm}>
              <i className="fa-solid fa-plus"></i>
              <p>Add Experience</p>
            </div>
          </button>
        </div>
      )}
      {isOpenForm && (
        <ExperienceDropForm
          data={modData[dataIndex]}
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
          dataIdx={dataIndex}
        />
      )}
    </div>
  )
}

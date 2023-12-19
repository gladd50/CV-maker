import { useState } from "react"
import EducationDropForm from "./EducationDropForm"
type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}
type EducationDropProps = {
  data: Education[]
  setEdu: (val: Education[]) => void
}
export default function EducationDrop(props: EducationDropProps) {
  const { data, setEdu } = props

  const defaultData: Education = {
    major: "",
    institution: "",
    startDate: "",
    endDate: "",
  }

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false)
  const [whichOpen, setWhichOpen] = useState<boolean>(false)
  const [dataIndex, setDataIndex] = useState<number>(0)

  const modData: Education[] = [defaultData, ...data]

  const handleDropEdu = () => {
    setIsOpenMenu(!isOpenMenu)
    setTimeout(() => {
      document.querySelector(".drop-animate")?.classList.add("active")
    }, 0)
  }
  const handleDropForm = () => {
    setIsOpenForm(!isOpenForm)
    setIsOpenMenu(false)
    setWhichOpen(true)
    setDataIndex(0)
    setTimeout(() => {
      document.querySelector(".drop-animate")?.classList.add("active")
    }, 0)
  }
  const handleChangeSchool = (idx: number) => {
    handleDropForm()
    setDataIndex(idx)
  }
  const handleSave = (sv: Education) => {
    const savedData: Education[] = [...data]
    if (dataIndex === 0) {
      savedData.unshift(sv)
    }
    savedData[dataIndex - 1] = sv
    setEdu(savedData)
  }
  const handleDelete = (idx: number) => {
    const savedData: Education[] = [...data]
    savedData.splice(idx - 1, 1)
    setEdu(savedData)
  }
  const handleCancel = () => {
    setIsOpenForm(false)
    setIsOpenMenu(false)
    setWhichOpen(false)
  }
  return (
    <div className="education-drop drop">
      <button
        className={`add-education-cont add ${
          (isOpenMenu || isOpenForm) && "drop-open"
        }`}
        onClick={whichOpen ? handleDropForm : handleDropEdu}
      >
        <div className="btn-cont">
          <i className="fa-solid fa-user-graduate"></i>
          <h2 className="education-title">Education</h2>
        </div>
        <i
          className={`fa-solid fa-angle-down ${
            (isOpenMenu || isOpenForm) && "rotate"
          }`}
        ></i>
      </button>
      {isOpenMenu && (
        <div className="drop-animate">
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
              <p>Add Education</p>
            </div>
          </button>
        </div>
      )}
      {isOpenForm && (
        <EducationDropForm
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

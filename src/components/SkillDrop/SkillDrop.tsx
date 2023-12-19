import { useState } from "react"
import "./SkillDropStyle.css"

type SkillDropProps = {
  data: string[]
  setSkill: (val: string[]) => void
}

export default function SkillDrop(props: SkillDropProps) {
  const { data, setSkill } = props

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const handleDropEdu = () => {
    setIsOpenMenu(!isOpenMenu)
    setTimeout(() => {
      document.querySelector(".drop-animate-skill")?.classList.add("active")
    }, 0)
    if (
      data[0] === "" ||
      data[0] === "Photo editing and digital illustration software"
    ) {
      setS1(data[0])
      setS2(data[1])
      setS3(data[2])
      setS4(data[3])
    }
  }
  const handleCancel = () => {
    setIsOpenMenu(false)
  }
  const [s1, setS1] = useState<string>(data[0])
  const [s2, setS2] = useState<string>(data[1])
  const [s3, setS3] = useState<string>(data[2])
  const [s4, setS4] = useState<string>(data[3])

  return (
    <div className="skill-drop drop">
      <button
        className={`add-skill-cont add ${isOpenMenu && "drop-open"}`}
        onClick={handleDropEdu}
      >
        <div className="btn-cont">
          <i className="fa-solid fa-bolt"></i>
          <h2 className="skill-title">Skill</h2>
        </div>
        <i className={`fa-solid fa-angle-down ${isOpenMenu && "rotate"}`}></i>
      </button>
      {isOpenMenu && (
        <form
          className="personal-form drop-animate-skill form-personal-cont add-form"
          onSubmit={(e) => {
            e.preventDefault()
            handleCancel()
            const savedData = [...data]
            savedData[0] = s1
            savedData[1] = s2
            savedData[2] = s3
            savedData[3] = s4
            setSkill(savedData)
          }}
        >
          <label htmlFor="s1">Skill 1</label>
          <textarea
            name="skill"
            id="s1"
            placeholder="Enter 1st Skill"
            value={s1}
            onChange={(e) => setS1(e.target.value)}
            rows={3}
            required
          />
          <label htmlFor="s2">Skill 2</label>
          <textarea
            required
            name="skill"
            id="s2"
            placeholder="Enter 2nd Skill"
            value={s2}
            onChange={(e) => setS2(e.target.value)}
            rows={3}
          />
          <label htmlFor="s3">Skill 3</label>
          <textarea
            name="skill"
            id="s3"
            placeholder="Enter 3rd Skill"
            value={s3}
            onChange={(e) => setS3(e.target.value)}
            rows={3}
            required
          />
          <label htmlFor="s4">Skill 4</label>
          <textarea
            required
            name="skill"
            id="s4"
            placeholder="Enter 4th Skill"
            value={s4}
            onChange={(e) => setS4(e.target.value)}
            rows={3}
          />
          <label className="btn-cont">
            <input type="submit" className="form-btn btn" value="Save" />
            <button className="form-btn btn" onClick={handleCancel}>
              Cancel
            </button>
          </label>
        </form>
      )}
    </div>
  )
}

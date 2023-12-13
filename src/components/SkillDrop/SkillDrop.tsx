import "./SkillDropStyle.css"
export default function SkillDrop() {
  return (
    <div className="skill-drop drop">
      <button className="add-skill-cont add btn">
        <div className="btn-cont">
          <i className="fa-solid fa-bolt"></i>
          <h2 className="skill-title">Skill</h2>
        </div>
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </div>
  )
}

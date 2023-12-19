import { useState } from "react"

type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}
type EducationDropFromProps = {
  data: Education
  onSave: (sv: Education) => void
  onCancel: () => void
  onDelete: (idx: number) => void
  dataIdx: number
}

export default function EducationDropForm(props: EducationDropFromProps) {
  const { data, onSave, onCancel, onDelete, dataIdx } = props
  const { major, institution, startDate, endDate } = data
  const [majorVal, setMajorVal] = useState(major)
  const [instVal, setInstVal] = useState(institution)
  const [startDVal, setStartDVal] = useState(startDate)
  const [endDVal, setEndDVal] = useState(endDate)
  return (
    <form
      className="personal-form drop-animate form-personal-cont"
      onSubmit={(e) => {
        e.preventDefault()
        const formVal: Education = {
          major: majorVal,
          institution: instVal,
          startDate: startDVal,
          endDate: endDVal,
        }
        onCancel()
        onSave(formVal)
      }}
    >
      <label htmlFor="major">Major</label>
      <input
        type="text"
        name="edu"
        id="major"
        value={majorVal}
        onChange={(e) => setMajorVal(e.target.value)}
        required
        placeholder="Enter Major"
      />
      <label htmlFor="institution">Institution</label>
      <input
        type="text"
        name="edu"
        id="institution"
        value={instVal}
        onChange={(e) => setInstVal(e.target.value)}
        required
        placeholder="Enter Institution"
      />
      <label htmlFor="startYear">Start Year</label>
      <input
        type="number"
        name="edu"
        id="startYear"
        value={startDVal}
        onChange={(e) => setStartDVal(e.target.value)}
        required
        placeholder="Enter Start Year"
      />
      <label htmlFor="endYear">End Year</label>
      <input
        type="number"
        name="edu"
        id="endYear"
        value={endDVal}
        onChange={(e) => setEndDVal(e.target.value)}
        required
        placeholder="Enter End Year"
      />
      <label className="btn-cont">
        <input type="submit" className="form-btn btn" value="Save" />
        <button className="form-btn btn" onClick={onCancel}>
          Cancel
        </button>
        {dataIdx !== 0 && (
          <button
            className="form-btn btn"
            onClick={() => {
              onCancel()
              onDelete(dataIdx)
            }}
          >
            Delete
          </button>
        )}
      </label>
    </form>
  )
}

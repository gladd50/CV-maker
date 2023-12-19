import { useState } from "react"

type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}
type Experience = Education & {
  desc: string
}
type ExperienceDropFromProps = {
  data: Experience
  onSave: (sv: Experience) => void
  onCancel: () => void
  onDelete: (idx: number) => void
  dataIdx: number
}

export default function ExperienceDropForm(props: ExperienceDropFromProps) {
  const { data, onSave, onCancel, onDelete, dataIdx } = props
  const { major, institution, startDate, endDate, desc } = data
  const [majorVal, setMajorVal] = useState(major)
  const [instVal, setInstVal] = useState(institution)
  const [startDVal, setStartDVal] = useState(startDate)
  const [endDVal, setEndDVal] = useState(endDate)
  const [descVal, setDescVal] = useState(desc)
  return (
    <form
      className="personal-form drop-animate-exp form-personal-cont add-form"
      onSubmit={(e) => {
        e.preventDefault()
        const formVal: Experience = {
          major: majorVal,
          institution: instVal,
          startDate: startDVal,
          endDate: endDVal,
          desc: descVal,
        }
        onCancel()
        onSave(formVal)
      }}
    >
      <label htmlFor="major">Role</label>
      <input
        type="text"
        name="edu"
        id="major"
        value={majorVal}
        onChange={(e) => setMajorVal(e.target.value)}
        required
        placeholder="Enter Role"
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
      <label htmlFor="description">Description</label>
      <textarea
        name="personal"
        id="description"
        rows={3}
        placeholder="Enter Job description"
        onChange={(e) => setDescVal(e.target.value)}
        value={descVal}
      ></textarea>
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

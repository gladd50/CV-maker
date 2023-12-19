import "./ClearButtonStyle.css"
type ClearButtonProps = {
  onClear: () => void
}
export default function ClearButton(props: ClearButtonProps) {
  const { onClear } = props
  return (
    <button className="clear-all-btn feat-btn btn" onClick={onClear}>
      <i className="fa-regular fa-trash-can"></i>
      <p>Clear Portofolio</p>
    </button>
  )
}

type LoadButtonProps = {
  onLoad: () => void
}

export default function LoadButton(props: LoadButtonProps) {
  const { onLoad } = props
  return (
    <button className="load-example-btn feat-btn btn" onClick={onLoad}>
      <i className="fa-solid fa-arrow-rotate-left"></i>
      <p>Load example</p>
    </button>
  )
}

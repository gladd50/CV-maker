import { useState } from "react"

type ContactDropProps = {
  data: string[]
  setCont: (val: string[]) => void
}

export default function ContactDrop(props: ContactDropProps) {
  const { data, setCont } = props

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const handleDropEdu = () => {
    setIsOpenMenu(!isOpenMenu)
    setTimeout(() => {
      document.querySelector(".drop-animate-cont")?.classList.add("active")
    }, 0)
    if (data[0] === "" || data[0] === "hello@reallygreatsite.com") {
      setEmail(data[0])
      setWeb(data[1])
      setIg(data[2])
      setAddr(data[3])
    }
  }
  const handleCancel = () => {
    setIsOpenMenu(false)
  }
  const [email, setEmail] = useState<string>(data[0])
  const [web, setWeb] = useState<string>(data[1])
  const [ig, setIg] = useState<string>(data[2])
  const [addr, setAddr] = useState<string>(data[3])
  return (
    <div className="contact-drop drop">
      <button
        className={`add-contact-cont add ${isOpenMenu && "drop-open"}`}
        onClick={handleDropEdu}
      >
        <div className="btn-cont">
          <i className="fa-solid fa-phone"></i>
          <h2 className="contact-title">Contact</h2>
        </div>
        <i className={`fa-solid fa-angle-down ${isOpenMenu && "rotate"}`}></i>
      </button>
      {isOpenMenu && (
        <form
          className="personal-form drop-animate-cont form-personal-cont add-form"
          onSubmit={(e) => {
            e.preventDefault()
            handleCancel()
            const savedData = [...data]
            savedData[0] = email
            savedData[1] = web
            savedData[2] = ig
            savedData[3] = addr
            setCont(savedData)
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="cont"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="website">Website</label>
          <input
            required
            type="text"
            name="cont"
            id="website"
            placeholder="Enter Website"
            value={web}
            onChange={(e) => setWeb(e.target.value)}
          />
          <label htmlFor="ig">Instagram</label>
          <input
            required
            type="text"
            name="cont"
            id="ig"
            placeholder="Enter Instagram"
            value={ig}
            onChange={(e) => setIg(e.target.value)}
          />
          <label htmlFor="addr">Address</label>
          <input
            type="text"
            name="cont"
            id="addr"
            placeholder="Enter Address"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            required
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

import { useState } from "react"
import ContactModal from "./ContactModal"


const Footer = () => {
  const [ contactVisible, setContactVisible ] = useState(false)

  return (
    <footer className="flex flex-col justify-start px-12 py-4 border-t-2 border-violet-800 prose max-w-none">
      <h3 onClick={() => setContactVisible(true)} className="cursor-pointer">
        Contact Me
      </h3>
      <ContactModal 
        visible={contactVisible} 
        closeModal={() => setContactVisible(false)}
      />
      <hr className="my-2 text-slate-400" />
      <img src="assets/brand-limited.svg" alt="Rho Technologies Limited" width="200" />
      <p>Registered in England, United Kingdom</p>
    </footer>
  )
}

export default Footer

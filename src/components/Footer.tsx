import { useState } from "react"


const Footer = () => {
  const [ contactVisible, setContactVisible ] = useState(false)
  return (
    <footer className="
      flex flex-col justify-start border-t-2 border-violet-800 px-12 py-4 prose"
    >
      <h3 onClick={() => setContactVisible(true)}>Contact Me</h3>
      <ContactModal visible={contactVisible} closeModal={() => setContactVisible(false)}/>
      <hr className="my-2 text-slate-400" />
      <img src="assets/brand-limited.svg" alt="Rho Technologies Limited" width="200" />
      <p>Registered in England, United Kingdom</p>
    </footer>
  )
}

export default Footer

const ContactModal = ({ visible, closeModal }: { visible:boolean, closeModal:()=>void }) => {

  if (!visible) return <></>

  return (
    <div className="fixed top-0 left-0 h-screen w-screen overscroll-contain bg-[#33333344] flex justify-center items-center"
      onClick={() => closeModal()}
    >
      <div className="relative z-10 w-1/2 flex flex-col opacity-100 bg-slate-50 dark:bg-slate-400 rounded-lg p-8 prose">
        <h1>Contact Me</h1>
        <hr />
        <a href="mailto:elliott@rho-technologies.com"><h4>email me</h4></a>
        <a href="https://github.com/ottelli"><h4>GitHub</h4></a>
        <a href="https://linkedin.com/in/elliott-cheesman"><h4>LinkedIn</h4></a>

        <div className="absolute top-4 right-4 opacity-50 cursor-pointer"
          onClick={() => closeModal()}>X</div>
      </div>
    </div>
  )
}
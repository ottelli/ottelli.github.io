
const ContactModal = ({ visible, closeModal }: {
  visible:boolean
  closeModal:() => void 
}) => {

  if (!visible) return <></>

  return (
    <div className={`z-20 fixed top-0 left-0 h-screen w-screen overscroll-contain  flex justify-center items-center transition-colors delay-500 ${visible ? 'bg-[#1a1a1a66]' : 'bg-[#1a1a1a01]'}`}
      onClick={() => closeModal()}
    >
      <div className="flex relative z-30 flex-col p-8 w-1/2 rounded-lg opacity-100 transition-opacity bg-slate-50 dark:bg-slate-400 prose">
        <h1>Contact Me</h1>
        <hr className="my-4" />

        <h4>Send me an <a className="font-bold" href="mailto:elliott@rho-technologies.com">email</a></h4>
        
        <h4>Check out my <a className="font-bold" href="https://github.com/ottelli">GitHub</a> page</h4>
        
        <h4>Connect with me on <a className="font-bold" href="https://linkedin.com/in/elliott-cheesman">LinkedIn</a></h4>

        <div className="absolute top-2 right-4 font-bold opacity-50 cursor-pointer"
          onClick={() => closeModal()}>
            X
        </div>
      </div>
    </div>
  )
}

export default ContactModal;
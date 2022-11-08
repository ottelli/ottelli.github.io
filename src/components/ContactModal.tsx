
const ContactModal = () => {

  return (
    <div className="h-screen w-screen bg-slate-500 opacity-50 flex justify-center items-center">
      <div className="w-1/2 flex flex-col prose">
        <h1>Contact Me</h1>
        <hr />
        <a href="mailto:elliott@rho-technologies.com"><h4>email me</h4></a>
        <a href="https://github.com/ottelli"><h4>GitHub</h4></a>
        <a href="https://linkedin.com/in/elliott-cheesman"><h4>LinkedIn</h4></a> 
      </div>
    </div>
  )
}

export default ContactModal;
import { NavLink } from "react-router-dom"


const Footer = () => {

  return (
    <footer className="
        flex flex-col justify-start 
        px-12 py-2  
        border-t-2 border-violet-800
        "
      >
        <NavLink to="/contact">Contact</NavLink>
        <hr className="my-2 text-slate-400" />
        <img src="assets/brand-limited.svg" alt="Rho Technologies Limited" width="200" />
        <p>Registered in England, United Kingdom</p>
      </footer>
  )
}

export default Footer
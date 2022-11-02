import { NavLink } from "react-router-dom"
import DarkBtn from './DarkBtn'

const Header = () => {

  return (
    <header className="
        relative flex justify-center
        py-20
        bg-white dark:bg-slate-600 
        "
      >
        <NavLink to="/">
          <img src="assets/brand.svg" alt="Rho Technologies" width="450" />
          <p className="text-slate-600 dark:text-slate-400">Sports Technology, Engineering and Software</p>
        </NavLink>

        <DarkBtn />
      </header>
  )
}

export default Header
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


function App() {
  const [ isDark, setDark ] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   setDark(true)
    // } else {
    //   setDark(false)
    // }

    setDark(
      localStorage.theme === 'dark' 
      || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )

  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDark])


  return (
    <div>
      <header className="bg-purple-100 dark:bg-slate-800">
        <Link to="/"><h1 className="text-black dark:text-white font-3xl">Rho Technologies</h1></Link>
        <input 
          type="checkbox" 
          className="bg-white dark:bg-black p-0 m-2" 
          checked={isDark}
          onChange={() => {
            setDark(!isDark)
          }}
        />
      </header>
      <nav className="bg-slate-700 dark:bg-slate-300 flex flex-row justify-evenly p-2">
        <Link to="/persistence" className="m-2 text-bold text-slate-900 dark:text-slate-100"><h3>Persistence</h3></Link>
        <Link to="/patches" className="m-2 text-bold text-slate-900 dark:text-slate-100"><h3>Patches</h3></Link>
        <Link to="/sense" className="m-2 text-bold text-slate-900 dark:text-slate-100"><h3>Sense</h3></Link>
      </nav>
      <section className="">
        <Outlet />
      </section>
      <footer className="flex flex-col justify-start m-2">
        <p className="text-bold">Rho Technologies Ltd</p>
        <Link to="/contact">Contact</Link>
      </footer>
    </div>
  );
}

export default App;

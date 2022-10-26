import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';


const App = () => {
  const [ isDark, setDark ] = useState(document.documentElement.classList.contains('dark'))

  // React to a priori theme preference
  useEffect(() => {
    setDark(
      localStorage.theme === 'dark' 
      || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }, [])

  // React to manual theme toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDark])

  //
  // Return the main app layout
  return (
    <div className="flex flex-col">
      
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

        <input 
          type="checkbox" 
          className="
            absolute
            top-0 right-0
            p-0 m-2
            bg-white dark:bg-black 
            " 
          checked={isDark}
          onChange={() => {
            setDark(!isDark)
          }}
        />
      </header>
      
      <nav className="
        flex flex-row justify-evenly
        bg-slate-200 text-violet-700
        dark:bg-violet-700 dark:text-slate-200
        py-4
        "
      >
        { 
          [ 
            'Persistence', 
            'Patches', 
            'Sense' 
          ].map(pageName => (
            <NavLink 
              to={`/${pageName.toLowerCase()}`} 
              key={pageName}
              className={({isActive}) => 
                "text-xl font-bold \
                py-2 px-4 \
                border-2 rounded-full \
                transition-colors" 
                + 
                (isActive ? 
                  " border-white bg-white \
                  shadow-sm \
                  dark:text-slate-600" 
                  :
                  " border-transparent"
                )
              }
              
            >
              {pageName}
            </NavLink>
          ) )
        }
      </nav>
      
      <section className="h-auto">
        <Outlet />
      </section>
      
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
      
    </div>
  );
}

export default App;

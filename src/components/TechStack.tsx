import { useState } from "react"


const TechStack = (props:{
  items:string[],
  onlyIcons?:boolean
}) => {
  const [ hover, setHover ] = useState<string|null>(null)
  return (
    <div className="flex flex-row flex-wrap">
      {
        props.items.map(name => (
          <div key={name} className="relative overflow-visible flex flex-row items-center prose m-1 py-1 px-2 rounded-md text-slate-50 dark:text-slate-50 bg-gradient-to-tr from-violet-600 to-violet-400 shadow-md shadow-violet-400 dark:shadow-slate-900"
            onMouseEnter={() => setHover(name)}
            onMouseLeave={() => setHover(null)}
          >
              
            <div className="w-6 h-6 flex items-center justify-center">
              <img src={`assets/stackIcons/${name}.svg`} alt={'#'} className="m-0" height="100%" />
            </div>
            {
              props.onlyIcons ?
                // Tooltip
                <h6 className={`absolute -top-9 left-0 m-0 rounded-md bg-slate-700 py-0 px-2 text-white font-bold ${hover === name ? 'block z-10' : 'hidden' }`}>
                  {name}
                </h6>
                :
                // Text
                <h6 className="ml-2 font-bold">
                  {name}
                </h6>
            }
          </div>
        ))
      }
    </div>
  )
}

export default TechStack
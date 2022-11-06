

const TechStack = (props:{
  items:string[],
  onlyIcons?:boolean
}) => {

  return (
    <div className="flex flex-row flex-wrap">
      {
        props.items.map(name => (
          <div key={name} className="prose m-1 py-1 px-2 rounded-md text-slate-50 dark:text-slate-50 bg-gradient-to-tr from-violet-600 to-violet-400 shadow-md shadow-violet-400 dark:shadow-slate-900">

            <div key={name} className="flex flex-row items-center">
              
              <div className="w-6 h-6 flex items-center justify-center">
                <img src={`assets/stackIcons/${name}.svg`} alt={'#'} className="m-0" />
              </div>

              {
                !props.onlyIcons && 
                <h6 className="ml-2 font-bold">
                  {name}
                </h6>
              }

            </div>

          </div>
        ))
      }
    </div>
  )
}

export default TechStack
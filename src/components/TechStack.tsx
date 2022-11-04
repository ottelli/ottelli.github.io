

const TechStack = (props:{
  items:string[],
}) => {

  return (
    <div className="flex flex-row flex-wrap">
      {props.items.map(name => (
        <div key={name} className="flex flex-row align-center my-1 mx-1 py-0 px-2 border border-solid border-black rounded-md bg-black text-white">
          <div className="w-6 h-6">
            <img src={`assets/stackIcons/${name}.svg`} alt={name + '-icon'} className="m-0" />
          </div>
          <p className="m-0">
            {name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TechStack
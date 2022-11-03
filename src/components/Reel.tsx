
interface IReelEntry {
  title: string
  img_src: string
  stack: string[]
  description: string
}

const Reel = (props:{ entries: IReelEntry[] }) => {

  return (
    <section className="bg-slate-200 dark:bg-slate-700"
      style={{
        padding: '1rem 4rem',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
      }}>
      {
        props.entries.map(entry => <ReelEntry key={entry.title} {...entry} />)
      }
    </section>
  )
}

export default Reel

const ReelEntry = (props:IReelEntry) => {

  return (
    <div className="bg-white dark:bg-slate-100"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30vw',
        minWidth: '240px',
        borderRadius: '18px',
        border: '6px outset #0f0f0f',
        margin: '0 1rem',
        padding: '1rem'
      }}
    >
      <img src={props.img_src} alt={props.title + '-alt'} width="100%" height="20vh"
        style={{
          border: '1px solid grey',
          height: '20vh',
          width: '100%',
        }}
      />
      <h3>
        {props.title}
      </h3>
      <div className=""
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        {
          props.stack.map(tool => (
            <h6 key={tool} 
              style={{
                margin: '.25rem',
                padding: '3px 6px',
                border: '2px solid #555',
                borderRadius: '2px',
                backgroundColor: 'black',
                color: 'white',
                fontWeight: 'bold',
              }}>{tool}</h6>
          ))
        }
      </div>
      <p>
        {props.description}
      </p>
    </div>
  )
}
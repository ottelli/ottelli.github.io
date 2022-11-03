
interface ITimelineEntry {
  title: string
  date: string
  short: string
  long: string
}

const Timeline = (props: { entries:ITimelineEntry[] }) => {

  return (
    <section className="h-auto w-max mx-4 my-8 text-slate-800 dark:text-slate-200 bg-green-50 dark:bg-slate-700"
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        padding: '10vw',
      }}
    >
      <h1
        style={{fontSize: '1.8rem', fontWeight: 'bold'}}
      >
        Timeline
      </h1>
      {
        props.entries.map(entry => <TimelineEntry key={entry.title} {...entry} />)
      }
    </section>
  )
}

export default Timeline

const TimelineEntry = (props:ITimelineEntry) => {

  return (
    <div className=""
      style={{
        display: 'grid',
        grid: '1fr / 30px 1fr 2fr 2fr 4fr',
        gap: '10px',
        borderBottom: '1px solid grey',
        // marginBottom: '1rem',
        alignItems: 'center',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 30 100">
        <line x1="7" y1="0" x2="7" y2="40" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
        <line x1="7" y1="60" x2="7" y2="100" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
        <circle cx="7" cy="50" r="7" fill="rgb(255,0,0)" />
        <line x1="16" y1="50" x2="30" y2="50" style={{stroke:'rgb(0,255,0)',strokeWidth:'4px'}} />
      </svg>
      <p className="my-2 text-slate-600 dark:text-slate-400"
        style={{
          borderRadius: '1ch',
          backgroundColor: 'green',
          padding: '1ch',
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {props.date}
      </p>
      <h2 
        style={{
          textAlign: 'start',
          fontSize: '1.6rem',
          fontWeight: 'light',
        }}
      >
        {props.title}
      </h2>
      <h3
        style={{
          fontSize: '1.2rem',
        }}
      >
        {props.short}
      </h3>
      <p>
        {props.long}
      </p>
    </div>
  )
}
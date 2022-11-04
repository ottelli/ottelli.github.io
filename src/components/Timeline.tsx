import { ITimelineEntry } from "../data/timeline_text"
import './Timeline.css'

const Timeline = (props: { entries:ITimelineEntry[] }) => {

  return (
    <section className="px-4 py-8 text-slate-800 dark:text-slate-200 bg-green-50 dark:bg-slate-700"
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        // padding: '10vw',
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
        width: '100%',
        display: 'grid',
        grid: '8ch auto / repeat(11, 1fr)',
        borderBottom: '1px solid grey',
        margin: '1rem 0',
        padding: '.5rem 0',
        alignItems: 'center',
      }}
    >
      <h3 className="my-2 text-slate-600 dark:text-slate-400"
        style={{
          gridColumn: '1 / 3',
          width: '66%',
          justifySelf: 'center',
          borderRadius: '1ch',
          backgroundColor: 'green',
          padding: '.5ch',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {props.date}
      </h3>
      <h2 style={{gridColumn: '3 / 5'}}>
        {props.title}
      </h2>
      <h3
        style={{
          gridColumn: '6 / 12',
          fontStyle: 'italic',
        }}
      >
        {props.short}
      </h3>
      <h6 
        style={{
          gridColumn: '1 / 3',
          padding: '2rem',
        }}
      >
        <strong>Question:</strong> {props.question}
      </h6>

      {/* Details */}
      <div className="flex flex-col"
        style={{
          gridColumn: '3 / 8',
        }}
      >
        {
          Object.entries(props.method).map(([name, text]) => <MethodStep name={name} text={text} />)
        }
      </div>

      {/* Project Status */}
      <Current text={props.current} />
      <Complete text={props.complete} />
    </div>
  )
}



const MethodStep = (props:{
  name:string,
  text:string|string[],
}) => {

  return (
    <div className="flex flex-col"
      style={{
        
      }}
    >
      <h5>{props.name}</h5>
      {
        props.text instanceof Array
        ?
          <div className="flex flex-row"
            style={{
              flexFlow: 'row wrap',
            }}
          >
            {
              props.text.map(item => (
                <p key={item} 
                  style={{
                    margin:'0 .1rem',
                    padding: '0 .5rem',
                    border:'1px solid grey',
                    borderRadius: '6px',
                    backgroundColor:'black',
                    color:'white'
                  }}
                >{item}</p>
              ))
            }
          </div>
        :
        <p>{props.text}</p>
      }
    </div>
  )
}



const Current = (props:{
  text?:{
    progress:string[],
    next:string[],
  }
}) => {
  if (props.text === undefined) return <></>
  
  return (
    <div className="flex flex-col"
      style={{
        gridColumn: '8 / 12',
        justifyContent: 'space-evenly',
        height: '100%',
      }}
    >
      <div>
        <h6>
          Progress
        </h6>
        {
          props.text.progress.map((text, i) => <p key={i}>{text}</p>)
        }
      </div>
      <div>
        <h6>
          Next Steps
        </h6>
        <ul>
        {
          props.text.next.map((text, i) => <li key={i}>{text}</li>)
        }
        </ul>
      </div>
    </div>
  )
}



const Complete = (props:{
  text?:{
    conclusion:string[],
    reflection:string[],
  }
}) => {
  if (props.text === undefined) return <></>
  
  return (
    <div className="flex flex-col"
      style={{
        gridColumn: '8 / 12',
        justifyContent: 'space-evenly',
        height: '100%',
      }}
    >
      <div>
        <h6>
          Conclusion
        </h6>
        <ul>
          {
            props.text.conclusion.map((text, i) => <li key={i}>{text}</li>)
          }
        </ul>
      </div>
      <div>
        <h6>
          Reflection
        </h6>
        {
          props.text.reflection.map((text, i) => <p key={i}>{text}</p>)
        }
      </div>
    </div>
  )
}


const SVG = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 30 100"
      style={{
        gridRowStart: 1,
        gridRowEnd: 2,
      }}
    >
      <line x1="7" y1="0" x2="7" y2="40" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
      <line x1="7" y1="60" x2="7" y2="100" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
      <circle cx="7" cy="50" r="7" fill="rgb(255,0,0)" />
      <line x1="16" y1="50" x2="30" y2="50" style={{stroke:'rgb(0,255,0)',strokeWidth:'4px'}} />
    </svg>
  )
}
import { ITimelineEntry } from "../data/timeline_text"
import TechStack from "./TechStack"
// import './Timeline.css'

const Timeline = (props: { entries:ITimelineEntry[] }) => {

  return (
    <section className="w-full flex flex-col items-center px-4 py-8 prose max-w-none dark:prose-invert prose-headings prose-p bg-violet-50 dark:bg-slate-900">
      <h1>
        Timeline
      </h1>
      {
        props.entries.map(entry => (
          <TimelineEntry key={entry.title} {...entry} />
        ))
      }
    </section>
  )
}

export default Timeline

const TimelineEntry = (props:ITimelineEntry) => {

  return (
    <div className="w-10/12 grid grid-cols-11 grid-auto-rows items-center my-4 mx-0 py-4 px-0 border-b border-dotted border-slate-500">
      
      {/* First Row */}

      <h4 className="col-start-1 col-end-3 w-2/3 justify-self-center my-2 p-1 rounded text-center font-normal text-white bg-gradient-to-tr from-green-700 to-green-500 shadow-md shadow-green-300 dark:shadow-slate-900">
        {props.date}
      </h4>

      <h2 className="col-start-3 col-end-6 font-normal">
        {props.title}
      </h2>

      <h3 className="col-start-6 col-end-12 font-light italic">
        {props.short}
      </h3>


      {/* Spacer */}
      <span className="col-start-1 col-end-12 h-8" />

      {/* Second Content Row */}

      <h6 className="col-start-1 col-end-6">
        <b>Question:</b> {props.question}
      </h6>

      <div className="col-start-6 col-end-12">
        <TechStack items={props.stack} />
      </div>

      {/* Spacer */}
      <span className="col-start-1 col-end-12 h-8" />

      {/* Third Content Row */}

      <div className="col-start-1 col-end-8 h-full">
        <Method {...props.method} />
      </div>

      <div className="col-start-8 col-end-12 h-full">
        <ProjectStatus {...props.status} />
      </div>
    </div>
  )
}


const Method = (props:{[step:string]:string|string[]}) => (
  <div className="prose flex flex-col">
    {
      Object.entries(props).map(([name, text]) => (
        <>
          <h5 className="font-bold italic">{name}</h5>
          {
            text instanceof Array // 'Stack'
            ?
            <div className="mb-6">
              <TechStack items={text} />
            </div>
            :
            <p className="mt-0">{text}</p>
          }
        </>
      ))
    }
  </div>
)



const ProjectStatus = (props:{
  [section:string]:string|string[]
}) => {
  
  return (
    <div className="h-full flex flex-col justify-evenly ml-4 pl-4 border-l border-slate-400 dark:border-slate-600">
      {
        Object.entries(props).map(([name, text]) => (
          <div key={name}>
            <h5 className="font-bold">{name}</h5>
            {
              text instanceof Array
              ?
              <ul className="list-outside list-disc my-0">
                {text.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
              </ul>
              :
              <p>{text}</p>
            }
          </div>
        ))
      }
    </div>
  )
}


const SVG = () => {
  return (
    <svg 
      width="100%" height="100%" 
      viewBox="0 0 30 100"
      className="row-start-1 row-end-2"
    >
      <line x1="7" y1="0" x2="7" y2="40" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
      <line x1="7" y1="60" x2="7" y2="100" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
      <circle cx="7" cy="50" r="7" fill="rgb(255,0,0)" />
      <line x1="16" y1="50" x2="30" y2="50" style={{stroke:'rgb(0,255,0)',strokeWidth:'4px'}} />
    </svg>
  )
}
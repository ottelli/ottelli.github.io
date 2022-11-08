import { useEffect } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"


export interface ITimelineEntry {
  title: string
  date: string
  short: string
  question: string
  stack: string[]
  method: ITimelineEntryMethod
  status: ITimelineEntryStatus
}

interface ITimelineEntryMethod {
  [step:string]:string|string[]
}

interface ITimelineEntryStatus {
  [section:string]:string|string[]
}



const Timeline = ({ entries }: { entries:ITimelineEntry[] }) => {

  return (
    <section className="w-full overflow-hidden flex flex-col items-center px-4 py-8 prose max-w-none dark:prose-invert prose-headings prose-p bg-violet-50 dark:bg-slate-900">
      <h1>
        Timeline
      </h1>
      {
        entries.map((entry, idx) => (
          <ErrorBoundary key={"Error Rendering: " + entry.title}>
            <TimelineEntry key={entry.title} index={idx} entry={entry} />
          </ErrorBoundary>
        ))
      }
    </section>
  )
}

export default Timeline


const TimelineEntry = ({ entry, index }:{ entry: ITimelineEntry, index:number }) => {

  const { containerRef, isVisible } = useIntersectionObserver({
    root: null,
    rootMargin: '9999px 9999px 0px 0px',
    threshold: 0.3
  })

  
  // useEffect(() => {
  //   console.log(containerRef.current?.getBoundingClientRect())

  // }, [isVisible])

  return (
    <div ref={containerRef} className={`w-10/12 grid grid-cols-5 grid-auto-rows items-center
      my-4 mx-0 rounded-3xl p-4 px-0 
      transform transition-opacity transition-colors transition-transform duration-500 
      ${isVisible || index===0 ? 
        'opacity-100 -transform-x-1/2 bg-gradient-to-tr from-red-300 via-slate-300 to-blue-200 shadow-xl' 
        : 
        'opacity-0 translate-x-1/2 bg-white'
      }
    `}>

      {/* 'Pinned' Project */}
      {
        index === 0 &&
        <div className="absolute -top-[8px] -right-[3px] h-8 text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill="currentColor" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
        </div>
      }

      {/* First Row */}

      <h4 className="col-start-1 col-end-2 w-2/3 justify-self-center my-2 p-1 rounded text-center font-normal text-white bg-gradient-to-tr from-green-700 to-green-500 shadow-md shadow-green-300 dark:shadow-slate-900">
        {entry.date}
      </h4>

      <h2 className="col-start-2 col-end-3 font-normal dark:text-slate-800">
        {entry.title}
      </h2>

      <h3 className="col-start-3 col-end-6 mr-8 text-right font-light italic  dark:text-slate-800">
        {entry.short}
      </h3>


      {/* Spacer */}
      <span className="col-start-1 col-end-6 h-8" />

      {/* Second Content Row */}

      <h6 className="col-start-1 col-end-3 m-4">
        <b>Question:</b> {entry.question}
      </h6>

      <div className="col-start-3 col-end-6">
        <TechStack items={entry.stack} />
      </div>

      {/* Spacer */}
      <span className="col-start-1 col-end-6 h-8" />

      {/* Third Content Row */}

      <div className="col-start-1 col-end-4 h-full mx-4">
        <Method {...entry.method} />
      </div>

      <div className="col-start-4 col-end-6 h-full mx-4">
        <ProjectStatus {...entry.status} />
      </div>
    </div>
  )
}


const Method = (props:ITimelineEntryMethod) => (
  <div className="h-full flex flex-col prose">
    {
      Object.entries(props).map(([name, text]) => (
        <>
          <h5 key={name + '-title'} className="font-bold italic">{name}</h5>
          {
            text instanceof Array // 'Stack'
            ?
            <div key={name + '-stack'} className="mb-6">
              <TechStack key={name + '-stack-proper'} items={text} />
            </div>
            :
            <p key={name + '-text'} className="mt-0">{text}</p>
          }
        </>
      ))
    }
  </div>
)


const ProjectStatus = (props:ITimelineEntryStatus) => {
  
  return (
    <div className="h-full flex flex-col justify-evenly pl-4 border-l border-slate-400 dark:border-slate-600 prose">
      {
        Object.entries(props).map(([name, text]) => (
          <div key={name}>
            <h5 className="font-bold">{name}</h5>
            {
              text instanceof Array
              ?
              <ul className="list-none list-inside m-0 p-0">
                {text.map((point, i) => (
                    <li key={i} className="relative flex pl-[20px]">
                      <svg className="absolute left-0 top-[6px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="12"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                      {point}
                    </li>
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


// const SVG = () => {
//   return (
//     <svg 
//       width="100%" height="100%" 
//       viewBox="0 0 30 100"
//       className="row-start-1 row-end-2"
//     >
//       <line x1="7" y1="0" x2="7" y2="40" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
//       <line x1="7" y1="60" x2="7" y2="100" style={{stroke:'rgb(0,0,255)',strokeWidth:'4px'}} />
//       <circle cx="7" cy="50" r="7" fill="rgb(255,0,0)" />
//       <line x1="16" y1="50" x2="30" y2="50" style={{stroke:'rgb(0,255,0)',strokeWidth:'4px'}} />
//     </svg>
//   )
// }
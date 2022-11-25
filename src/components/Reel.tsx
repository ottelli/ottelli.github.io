import DOMPurify from "dompurify"
import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"

interface IReelCard {
  title: string
  img_src: string
  link?:string
  stack?: string[]
  description: string
}

const Reel = (props:{ entries: IReelCard[] }) => {

  return (
    <section className="flex flex-row flex-wrap justify-center px-16 py-16 max-w-none bg-blue-100 dark:bg-slate-700 prose">
      {
        props.entries.map(entry => (
          <ErrorBoundary key={"Error Boundary, Reel: " + entry.title}>
            <ReelCard key={entry.title} {...entry} />
          </ErrorBoundary>
        ))
      }
    </section>
  )
}

export default Reel

const ReelCard = (props:IReelCard) => {

  return (
    <div className="flex overflow-hidden flex-col mx-4 my-4 w-4/12 min-w-[360px] max-w-none bg-white rounded-2xl shadow-2xl dark:bg-gradient-to-tr dark:bg-black prose dark:text-white">
      <a href={props.link ?? `#${props.title}`}>
        <img src={props.img_src} alt={props.title + '-alt'} 
          className="w-full h-[180px] m-0 border-b border-slate-600" 
        />
      </a>

      <div className="flex flex-col justify-between px-2 py-2 h-full">
        <div>
          <h3 className="dark:text-white">
            {props.title}
          </h3>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.description)}} />
        </div>
        {
          props.stack &&
          <TechStack items={props.stack} onlyIcons />
        }
      </div>
    </div>
  )
}
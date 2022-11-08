import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"

interface IReelCard {
  title: string
  img_src: string
  link?:string
  stack: string[]
  description: string
}

const Reel = (props:{ entries: IReelCard[] }) => {

  return (
    <section className="max-w-none flex flex-row justify-center py-20 px-16 bg-slate-300 dark:bg-slate-700 prose">
      {
        props.entries.map(entry => (
          <ErrorBoundary key={"Error Boundary, Reel: " + entry.title}>
            <Card key={entry.title} {...entry} />
          </ErrorBoundary>
        ))
      }
      <span className="shadow-xl shadow-2xl shadow-3xl shadow-4xl" />
    </section>
  )
}

export default Reel

const Card = (props:IReelCard) => {

  return (
    <div className="w-4/12 min-w-[240px] max-w-[360px] flex flex-col my-0 mx-4 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gradient-to-tr dark:bg-slate-300">
      <a href={props.link ?? `#${props.title}`}>
        <img src={props.img_src} alt={props.title + '-alt'} 
          className="w-full h-[120px] m-0 border-b border-slate-600" 
        />
      </a>

      <div className="py-2 px-2 h-full flex flex-col justify-between">
        <div>
          <h3>
            {props.title}
          </h3>
          <p>
            {props.description}
          </p>
        </div>
        <TechStack items={props.stack} onlyIcons />
      </div>
    </div>
  )
}
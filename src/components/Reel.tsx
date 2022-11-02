import { prodErrorMap } from "firebase/auth"

interface IReelEntry {
  title: string
  img_src: string
  stack: string[]
  description: string
}

const Reel = (props:{ entries: IReelEntry[] }) => {

  return (
    <section className="flex flex-row">
      {
        props.entries.map(entry => <ReelEntry key={entry.title} {...entry} />)
      }
    </section>
  )
}

export default Reel

const ReelEntry = (props:IReelEntry) => {

  return (
    <div className="">
      <img src={props.img_src} alt={props.title + '-alt'}/>
      <h3>
        {props.title}
      </h3>
      <div className="flex flex-row justify-evenly">
        {
          props.stack.map(tool => <h6 key={tool}>{tool}</h6>)
        }
      </div>
      <p>
        {props.description}
      </p>
    </div>
  )
}
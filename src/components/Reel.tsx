import TechStack from "./TechStack"

interface IReelEntry {
  title: string
  img_src: string
  stack: string[]
  description: string
}

const Reel = (props:{ entries: IReelEntry[] }) => {

  return (
    <section className="prose max-w-none flex flex-row justify-center py-2 px-16 bg-slate-200 dark:bg-slate-700">
      {
        props.entries.map(entry => (
          <div className="w-4/12 min-w-[240px] max-w-[360px] flex flex-col my-0 mx-4 border-[6px] border-outset border-slate-700 dark:border-slate-300 rounded-3xl overflow-hidden bg-white dark:bg-slate-100">
            <img src={entry.img_src} alt={entry.title + '-alt'} 
              className="w-full h-auto m-0 border border-black" 
            />

            <div className="pt-2 px-2">

              <h3>
                {entry.title}
              </h3>
              <TechStack items={entry.stack} />
              <p className="my-2">
                {entry.description}
              </p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Reel

const ReelEntry = (props:IReelEntry) => {

  return 
}
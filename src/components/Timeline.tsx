
interface ITimelineEntry {
  title: string
  date: string
  short: string
  long: string
}

const Timeline = (props: { entries:ITimelineEntry[] }) => {

  return (
    <section className="h-auto w-max mx-2 my-2 flex flex-col justify-center text-slate-800 dark:text-slate-200 bg-green-50 dark:bg-slate-700">
      {
        props.entries.map(entry => <TimelineEntry key={entry.title} {...entry} />)
      }
    </section>
  )
}

export default Timeline

const TimelineEntry = (props:ITimelineEntry) => {

  return (
    <div className="flex flex-row">
      <h2>
        {props.title}
      </h2>
      <p className="my-2 text-slate-600 dark:text-slate-400">
        {props.date}
      </p>
      <hr />
      <h3>
        {props.short}
      </h3>
      <p>
        {props.long}
      </p>
    </div>
  )
}
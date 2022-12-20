import DOMPurify from "dompurify"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"

interface IReelCard {
  title: string
  img_src: string
  link?: string
  stack?: string[]
  description: string
}

const Reel = (props: { entries: IReelCard[] }) => {
  return (
    <section className='prose flex max-w-none flex-row flex-wrap justify-center bg-blue-100 py-16 px-4 dark:bg-slate-800 sm:px-16'>
      {props.entries.map((entry) => (
        <ErrorBoundary key={"Error Boundary, Reel: " + entry.title}>
          <ReelCard key={entry.title} {...entry} />
        </ErrorBoundary>
      ))}
    </section>
  )
}

export default Reel

const ReelCard = (props: IReelCard) => {
  const { containerRef, isVisible } = useIntersectionObserver({
    root: null,
    rootMargin: "9999px 9999px 0px 0px",
    threshold: 0.3,
  })

  return (
    <div
      ref={containerRef}
      className={`prose mx-4 my-4 flex w-4/12 min-w-[320px] max-w-none transform flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition duration-500 dark:bg-indigo-900 dark:bg-gradient-to-tr dark:text-white
      ${
        isVisible
          ? "-transform-x-1/2 opacity-100 shadow-xl"
          : "translate-x-1/2 opacity-0"
      }
      `}
    >
      {/* <a href={props.link ?? `#${props.title}`}>
        <img
          src={props.img_src}
          alt={props.title + "-alt"}
          className="m-0 h-[180px] w-full border-b border-slate-600"
        />
      </a> */}

      <div className='flex h-full flex-col justify-between px-2 py-2'>
        <div>
          <h3 className='dark:text-white'>{props.title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.description),
            }}
          />
        </div>
        {props.stack && <TechStack items={props.stack} onlyIcons />}
      </div>
    </div>
  )
}

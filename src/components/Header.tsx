import DarkBtn from './DarkBtn'

const Header = () => {

  return (
    <header className="prose max-w-none relative flex flex-col items-center py-20 bg-white dark:bg-slate-500  "
      >
        <h1 className="text-[2.5rem]">
          Elliott Cheesman
        </h1>
        <h5 className="italic text-slate-400 dark:text-slate-200">
          Sports Technology, Engineering, Software.
        </h5>

        <div className="absolute top-6 right-6 h-8 w-8">
          <DarkBtn />
        </div>
      </header>
  )
}

export default Header
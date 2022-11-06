import DarkBtn from './DarkBtn'

const Header = () => {

  return (
    <header className="prose max-w-none relative flex flex-col items-center py-20 bg-white dark:bg-slate-500  "
      >
        <h1 className="text-[2.5rem]">
          Elliott Cheesman
        </h1>
        <h5 className="italic text-slate-400">
          Sports Technology, Engineering, Software.
        </h5>

        {/* Absolute top right */}
        <DarkBtn />
      </header>
  )
}

export default Header
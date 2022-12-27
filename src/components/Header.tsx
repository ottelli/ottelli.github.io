// import { useState } from "react"
// import ContactModal from "./ContactModal"
import DarkBtn from "./DarkBtn"

const Header = () => {
  // const [contactVisible, setContactVisible] = useState(false)

  return (
    <header className='prose relative flex max-w-none flex-col items-center bg-white py-20 dark:bg-slate-500'>
      <h1
        className='cursor-pointer text-[2.5rem]'
        // onClick={() => setContactVisible(true)}
      >
        Elliott Cheesman
      </h1>
      <h5 className='text-center italic text-slate-400 dark:text-slate-200'>
        Sports Engineer <b>{"//"}</b> Full-Stack Web Developer
      </h5>

      <div className='absolute top-6 right-12 '>
        <div className='flex h-8 flex-row'>
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            height='100%'
            fill='currentColor'
            viewBox='0 0 16 16'
            className='mr-2 cursor-pointer'
            onClick={() => setContactVisible(true)}
          >
            <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
          </svg> */}
          <DarkBtn />
        </div>
      </div>

      {/* <ContactModal
        visible={contactVisible}
        closeModal={() => setContactVisible(false)}
      /> */}
    </header>
  )
}

export default Header

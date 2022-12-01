import { useState } from 'react'
import ContactModal from './ContactModal'
import DarkBtn from './DarkBtn'

const Header = () => {
  const [ contactVisible, setContactVisible ] = useState(false)
  
  return (
    <header className="flex relative flex-col items-center py-20 max-w-none bg-white prose dark:bg-slate-500">
      <h1 className="text-[2.5rem] cursor-pointer"
        onClick={() => setContactVisible(true)}
      >
        Elliott Cheesman
      </h1>
      <h5 className="italic text-slate-400 dark:text-slate-200">
        Sports Engineer <b>//</b> Full-Stack Web Developer
      </h5>

      <div className="absolute top-6 right-6 w-8 h-8">
        <DarkBtn />
      </div>

      <ContactModal 
        visible={contactVisible}
        closeModal={() => setContactVisible(false)}
      />
    </header>
  )
}

export default Header
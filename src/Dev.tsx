import Header from "./components/Header"
import TechStack from "./components/TechStack"

const Dev = () => {

  return (
    <div>
      {/* <Header /> */}
      <div className="p-8 w-1/2">

        <TechStack items={['Python', 'TypeScript', 'React', 'Go', 'MATLAB', 'Sass', 'Tailwind', 'Redux', 'Arduino', 'IMU', 'Android' ]} />

        {/* <TechStack items={['IMU']} /> */}


      </div>
    </div>
  )
}

export default Dev
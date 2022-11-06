import Header from "./components/Header"
import TechStack from "./components/TechStack"

const Dev = () => {

  return (
    <div>
      {/* <Header /> */}
      <div className="w-1/2 p-8">

        <TechStack items={['Python', 'TypeScript', 'React', 'MATLAB', 'Sass', 'Tailwind', 'Redux', 'Arduino', 'IMU', 'Android' ]} />

        {/* <TechStack items={['IMU']} /> */}


      </div>
    </div>
  )
}

export default Dev
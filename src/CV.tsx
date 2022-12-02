import "./CV.css";

const CV = () => {
  return (
    <div>
      <div className="border-grey prose my-4 w-screen max-w-none border-b pb-6">
        <a
          href="/"
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1>{`<< Back to portfolio`}</h1>
        </a>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: cv }}
        className="cv"
        style={{
          fontFamily: "Segoe UI",
          margin: "2rem 4rem",
        }}
      ></div>
    </div>
  );
};

export default CV;

const cv: string = `
  <header>
    <div class="flexCol" style="justify-content: center;">
      <h1>Elliott Cheesman</h1>
    </div>

    <div class="flexCol" style="align-items: flex-end">
      <a href="mailto:elliott@rho-technologies.com">
        <h5>elliott@rho-technologies.com</h5>
      </a>
      <h5>07452980703</h5>
      <a href="https://ottelli.github.io">
        <h5>My Portfolio</h5>
      </a>
    </div>
  </header>
  
  <main>

    <section> <!--Rho-->
      <div class="flexRow splitRow">
        <h3>Founder & Full-Stack Engineer</h3>
        <h4>July 2022 - present</h4>
      </div>
      <a href="https://rho-technologies.com">
        <h5>Rho Technologies Ltd</h5>
      </a>

      <p>I thoroughly enjoyed learning to program at university. Unfortunately, we were using MATLAB which is proprietary software, so after graduating I switched to Python. I love the experience of having an idea, building it with code, and seeing it come to life. Code also allows a single person to build scalable products and services, an ideal medium through which to apply my skills as a Sports Engineer.</p>
      
      <p>Sports engineering is the application of maths, physics and computer science to solve sporting problems, and the problems that attract me the most surround measuring real-world performance, and using that data to provide actionable feedback to amateurs and professionals alike. My first product to be released will be <a href="https://persistence.rhotech.app/about"><i><b>Persistence</b></i></a>, a training calendar and insights app, delivered as a PWA to be available cross-platform and installable via bookmark. In future, I have plans for both software and hardware products drawing on my research expertise with wearable sensors.</p>

      <h4>In my live codebases</h4>

      <b>Back-end Technologies</b>
      <ul>
        <li>REST APIs and servers in <b>Python</b> and <b>Go</b> implementing OAuth2.0 authorization standard.</li>
        <li>Relational and document database paradigms (MySQL, Firestore).</li>
        <li>Hosting on cloud services (Google Cloud, PythonAnywhere).</li>
      </ul>

      <b>Front-end Technologies</b>
      <ul>
        <li>Modern <b>Progressive Web App</b> architecture</li>
        <li>Interfaces built with React function components in <b>TypeScript</b>.</li>
        <li>State management with Redux.</li>
        <li>Pure <b>JavaScript</b> interfaces.</li>
        <li>Custom component libraries built with <b>HTML + CSS</b></li>
        <li>Multiple stylesheet paradigms, Primarily <b>Sass</b>, <b>TailwindCSS</b> and <b>CSS-in-JS</b></li>
      </ul>
      
      <b>Developer Tooling</b>
      <ul>
        <li>Linux and Windows machines.</li>
        <li><b>Bash</b></li>
        <li><b>Git</b>, plus CI/CD with GitHub Actions</li>
        <li>Vite, NextJS, Webpack.</li>
        <li>Unit testing with Jest and the React Testing Library.</li>
      </ul>
    </section>

    <section> <!--Carer-->
      <div class="flexRow splitRow">
        <h3>Carer</h3>
        <h4>Jan 2021 - present</h4>
      </div>
      <p>I left my last employment to provide live-in care for my Grandmother who was diagnosed with Alzheimer's Dementia in 2017. It's an any-and-all-times role that I have found incredibly rewarding. I have also been able to build my programming skills and indulge my passion for reading.</p>
    </section>

    <section> <!--SiteControl-->
      <div class="flexRow splitRow">
        <h3>Site Controller</h3>
        <h4>Jul 2019 - Dec 2020</h4>
      </div>
      <h5>Big Bang Promotions</h5>
      <p>Responsible for managing a small team to deliver multi-day events.</p>
      <ul>
        <li>Motivating team members to deliver a smooth operation.</li>
        <li>End of day accounting.</li>
        <li>Providing first aid, and incident reporting.</li>
        <li>Acting and reacting decisively under constant time pressure, delegating and taking advice where appropriate.</li>
        <li>Liaising with venues, maintaining business-to-business relationships.</li>
      </ul>
    </section>

    <section> <!--GoalLine-->
      <div class="flexRow splitRow">
        <h3>Goal Line Technology Test Engineer</h3>
        <h4>Sep 2018</h4>
      </div>
      <h5>Labosport, Summer Internship</h5>
      <ul>Responsible for
        <li>Carrying out FIFA standard procedures for testing Goal Line Technology.</li>
        <li>Setting up test equipment including high speed cameras.</li>
        <li>Working in a small team to ensure that game laws are being upheld in the implementation of technology into football.</li>
      </ul>
    </section>

    <section> <!--Masters-->
      <div class="flexRow splitRow">
        <h3>MSc Sports Engineering</h3>
        <h4>Sep 2017 - Jun 2018</h4>
      </div>
      <div class="flexRow splitRow" style="margin-bottom: .25rem">
        <h5>Distinction</h5>
        <h6>Sheffield Hallam University</h6>
      </div>
      <p>This course was designed to apply advanced engineering techniques like simulation and computer vision to research and development of sports technologies and equipment. I developed my biomechanical and physiological understanding and gained new technical abilities that give me confidence that I can have a positive impact in any area of human-centred technology and engineering.</p>
      <p>I dedicated my thesis project to testing the hypothesis that non-linearities in gait would predict running economy (energy efficiency). I built upon the wearable sensor techniques from my undergraduate, adding temporal information algorithms like Sample Entropy and Fluctuation Analysis. Combined with gas exchange measurements I was able confirm my hypothesis and demonstrate that a J-shaped curve of efficiency exists in running gait, with faster athletes exhibiting a wider and deeper trough of greater energy efficiency across the velocity scale, predictable from wearable sensor data.</p>
      <ul><b>Key Themes</b>
        <li>Computation; Computer vision, advanced statistics, and modelling physical systems with differential equations.</li>
        <li>Innovation and Enterprise; listening to a problem, designing and testing a solution, then formulating a viable business plan around it.</li>
        <li>Simulation; Mechanical, vibrational, and aerodynamic simulation. </li>
        <li>Research and Testing; Wearable instrumentation, high-speed photography, 2D and 3D photogrammetry.</li>
        <li>Human-Centred Design; Physiology, qualitative methods, human factors and motor learning.</li>
      </ul>
    </section>
    
    <section> <!--Instructor-->
      <div class="flexRow splitRow">
        <h3>Events Instructor</h3>
        <h4>Jun 2017 - Dec 2020</h4>
      </div>
      <h5>Big Bang Promotions</h5>
      <p>Required to perform every task necessary to provide a high-quality, enjoyable event for customers and corporate clients.</p>
      <ul>
        <li>Performing safety inspections on specialised machines (Segway PT / BPG Works DualTrack Shredder), including damage assessment, maintenance and repairs.</li>
        <li>Providing comprehensive and engaging customer training, selling the experience, and creating a fun environment, adding value for the customer.</li>
        <li>Working actively to reduce risk whilst also being well prepared to give first aid.</li>
        <li>Packing equipment with organisation and due process.</li>
      </ul>
    </section>

    <section> <!-- Bachelors-->
      <div class="flexRow splitRow">
        <h3>BEng Sports Technology</h3>
        <h4>Sep 2014 - Jun 2017</h4>
      </div>
      <div class="flexRow splitRow" style="margin-bottom: .25rem">
        <h5>First Class Honours</h5>
        <h6>Sheffield Hallam University</h6>
      </div>
      <p>This practical course first established a solid workshop-based engineering foundation before shifting towards modern engineering techniques suited to bespoke design and manufacture, with a continual focus on human-centred technology.</p>
      <p>My dissertation was titled "How does shoe choice effect lower limb shock while running?" and involved recruiting and working with participants, measurement with wearable sensors (IMUs), signal processing and impact modelling with factor analysis.</p>
      <ul><b>Key Skills</b>
        <li>CAD / CAM (Solidworks)</li>
        <li>Finite Element and Fluid Simulation (ANSYS)</li>
        <li>Design Skills; Working to specification, technical drawing, prototyping, manufacture and evaluation.</li>
        <li>Materials science and selection methodologies, specialising in composites, with destructive and non-destructive testing.</li>
      </ul>
    </section>

    <section> <!--School-->
      <div class="flexRow splitRow">
        <h3>A Levels</h3>
        <h4>July 2014</h4>
      </div>
      <div class="flexRow splitRow">
        <h5>The Arnewood Academy & Sixth Form</h5>
      </div>
      <ul>
        <li>Psychology - B</li>
        <li>Physical Education, B</li>
        <li>Product Design (C)</li>
        <br style="line-height: .5rem"/>
        <li>11 A*-C GCSEs including Maths, English and Science A* (2012)</li>
      </ul>
    </section>

  </main>
`;

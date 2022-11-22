const CV = () => {
  return <div>
    <a href="/" style={{
      width: '100%',
      textAlign: 'center'
    }}>
      <h1>{`<< Back to portfolio`}</h1>
    </a>
    <hr />
    <br />
    <div dangerouslySetInnerHTML={{__html: cv}}></div>
  </div>
}

export default CV


const cv:string = `
<html>
  <style>
    html {
      /* font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans'; */
      font-family: 'Segoe UI';
      font-size: 66%;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      margin: .5rem 0;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: .5rem 0;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: .25rem 0;
    }
    h4 {
      font-size: 1.25rem;
      font-weight: 500;
      margin: .25rem 0;
      font-style: italic;
    }
    h5 {
      font-size: 1.15rem;
      font-weight: 500;
      margin: 0rem 0;
    }
    h6 {
      font-size: 1.15rem;
      font-weight: 400;
      font-style: italic;
      margin: 0rem 0;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      margin: .1rem 0;
    }
    ul {
      list-style-position: inside;
      margin: .1rem 0;
      padding-left: .5rem;
    }
    li {

    }
  </style>

  <!-- Sections -->
  <style>
    body {
      margin: 2rem 4rem;
    }
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 1rem;
      margin-bottom: 2rem;
    }

    main {
      display: flex;
      flex-direction: column;
    }

    main section {
      /* border: 1px solid grey; */
      margin: .25rem;
      padding: .25rem;
    }

    section {
      border-bottom: 2px solid lightgrey;
    }

    summary {
      border: 1px solid lightblue;
      margin: .25rem;
      padding: .25rem;
    }

    footer {
      border: 1px solid grey;
      padding: .5rem;
    }
  </style>

  <!-- Layout classes -->
  <style>
    .flexRow {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .splitRow {
      justify-content: space-between;
    }
    .flexCol {
      display: flex;
      flex-direction: column;
    }
    .centredCol {
      justify-content: center;
      align-items: center;
    }
  </style>


  <body>

    <header>
      <h1>Elliott Cheesman</h1>

      <div class="flexCol" style="align-items: flex-end">
        <a href="mailto:elliott@rho-technologies.com">
          <h5>elliott@rho-technologies.com</h5>
        </a>
        <h5>07452980703</h5>
        <a href="/">
          <h5>My Portfolio</h5>
        </a>
      </div>
    </header>
    
    <main>

      <summary>
        <h2>What you get</h2>
        <ul>
          <li>Ambitious self-motivated problem-solver
            <ul>
              <li>Self-taught programmer, 0 to Full-Stack</li>
            </ul>
          </li>
          <li>Curious tech enthusiast
            <ul>
              <li>I run Arch, btw</li>
            </ul>
          </li>
        </ul>
      </summary>

      <section>
        <h2>Specific Experience</h2>
        
        <section>
          <div class="flexRow splitRow">
            <h3>Founder & Full-Stack Engineer</h3>
            <h4>July 2022 - present</h4>
          </div>
          <a href="https://rho-technologies.com">
            <h5>Rho Technologies Ltd</h5>
          </a>
          <ul>
            <li>Modern Progressive Web App architecture</li>
            <li>REST APIs and servers in Python implementing OAuth2.0 authorization, with both relational and document databasing.</li>
            <li>Frontend UIs in TypeScript with React and Redux stores.</li>
            <li>Experience of multiple bundlers and build tools, primarily Vite and NextJS.</li>
            <li>Sylesheets in CSS, SCSS, .module, or component library such as Bootstrap and TailwindCSS</li>
            <li>Unit testing with Jest and React Testing Library.</li>
          </ul>
        </section>

      </section>
      
      <section>
        <h2>Education</h2>

        <section>
          <div class="flexRow splitRow">
            <h3>MSc Sports Engineering</h3>
            <h4>2017-18</h4>
          </div>
          <div class="flexRow splitRow" style="margin-bottom: .25rem">
            <h5>Distinction</h5>
            <h6>Sheffield Hallam University</h6>
          </div>
          <ul>
            <li>Point</li>
            <li>Point</li>
          </ul>
        </section>

        <section>
          <div class="flexRow splitRow">
            <h3>BEng Sports Technology</h3>
            <h4>2014-17</h4>
          </div>
          <div class="flexRow splitRow" style="margin-bottom: .25rem">
            <h5>First Class Honours</h5>
            <h6>Sheffield Hallam University</h6>
          </div>
          <ul>
            <li>Discovered the opportunity to fuse my two loves. Work in Technology applied to my greatest passion. Work in Sport while playing to my real skills and aptitudes.</li>
            <li>Developed a drive and work ethic I had sometimes lacked previously.</li>
          </ul>
        </section>

      </section>

      <section>
        <h2>Roles</h2>
        <section>
          <div class="flexRow splitRow">
            <h3>Carer</h3>
            <h4>Jan 2021 - present</h4>
          </div>
          <p>I left my last employment to care for my Grandmother who has Alzheimer's Dementia. It's an any-and-all-times role, but I have also been able to build my programming skills and indulge my passion for reading.</p>
        </section>

        <section>
          <div class="flexRow splitRow">
            <h3>Goal Line Technology Test Engineer</h3>
            <h4>2018</h4>
          </div>
          <h5>Labosport</h5>
          <ul>Responsible for
            <li>Carrying out FIFA standard procedures for testing Goal Line Technology.</li>
            <li>Setting up of test equipment including hight speed cameras.</li>
            <li>Working in a small team to ensure that game laws are being upheld in the implementation of technology into football.</li>
          </ul>
        </section>

        <section>
          <div class="flexRow splitRow">
            <h3>Site Controller & Events Instructor</h3>
            <h4>Jun 2017 - Dec 2020</h4>
          </div>
          <h5>Segway Events, Big Bang Promotions</h5>
          <ul>
            <li></li>
          </ul>
        </section>
        
      </section>

      <section>
        <h2>School Education</h2>
        <section>
          <div class="flexRow splitRow">
            <h3>A Levels</h3>
            <h4>2014</h4>
          </div>
          <div class="flexRow splitRow">
            <h5>The Arnewood Academy & Sixth Form</h5>
          </div>
          <ul>
            <li>Psychology (B)</li>
            <li>Physical Education (B)</li>
            <li>Product Design (C)</li>
            <br style="line-height: .5rem"/>
            <li>11 A*-C GCSEs (2012) including Maths, English and Science A*</li>
          </ul>
        </section>
      </section>


    </main>

  </body>

</html>
`
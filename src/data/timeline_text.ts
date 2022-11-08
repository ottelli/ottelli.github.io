import { ITimelineEntry } from "../components/Timeline"



export const timeline_text:ITimelineEntry[] = [
  { title: 'Persistence',
    date: 'Jan 2022',
    short: 'Training Calendar App',
    question: 'Use a Bubble Calendar and a personal Lab to review and plan more activities',
    stack: [
      'Python',
      'Flask',
      'TypeScript',
      'React',
      'Redux',
      'Sass',
    ],
    method: {
      'Backend Server': 'RESTful web API witten with the Flask microframework. SQLite ORM to manage the database.',
      'Frontend UI': 'Progressive Web App built with React 18 function components, written in TypeScript, packaged with Vite, and hosted on Firebase.',
      'Styles': 'Bootstrap -> Plan CSS -> Sass -> .module.css -> CSS-in-JS - (this site is with TailWind, my favourite is a 70-20-10 with Sass, .module, CSS-in-JS)',
    },
    status: {
      'Progress': [
        '',
      ],
      'Next': [
        '',
      ],
    }
  },
  { title: 'Rho Technologies Website',
    date: 'Oct 2022',
    short: 'Business Website',
    question: '?',
    stack: [
      'Go',
      'TypeScript',
      'React',
      'Tailwind',
    ],
    method: {
      'Backend API': 'Written in Go with the Gin web framework.',
      'Frontend UI': 'Written in TypeScript with React, packaged with Webpack, styled with TailwindCSS, hosted on Firebase.',
    },
    status: {
      'Progress': '',
      'Next': '',
    }
  },
  { title: 'First Python Code',
    date: 'Nov 2019',
    short: 'El Presidente, my favourite card game, on the command line!',
    question: 'How is this even possible?',
    stack: [
      'Python',
    ],
    method: {

    },
    status: {
      'Conclusion': [
        'It\' was possible!',
      ],
      'Reflection': [
        'Classes, Dictionaries, List Comprehension, if for while',
      ],
    },
  },
  { title: 'Masters Degree Thesis Project',
    date: 'Jun 2018',
    short: 'MSc Sports Engineering with Distinction',
    question: 'Can non-linearities in gait predict running economy?',
    stack: [
      'IMU',
      'MATLAB',
    ],
    method: {
      'Experiment': 'Recruited [n] people. Gas analysis + Gait analysis.',
      'Analysis': 'Vectorisation. DFA. SampEnt.',
    },
    status: {
      'Conclusion': [
        'Everyone has a velocity-variability sweet-spot in their running gait, which is most efficient for them.',
        'U-shape Function (possiblty J-shape). Expert is shifted to the right, and wider trough',
      ],
      'Reflection': [
        'Consequent Hypotheses: Adaptation to terrain.',
      ],
    },
  },
  { title: 'FeedBack',
    date: 'Mar 2018',
    short: 'Innovation & Enterprise Team Project',
    question: 'How to prevent back injuries from deadlifting?',
    stack: [
      'Android',
      'MATLAB',
    ],
    method: {
      'Brief': 'Help a sports injury, with technology.',
      'Solution': 'A camera purchased by gyms, placed to the side when deadlifting. Together with an Android app to give live feedback and record sessions.',
      'Team Role': 'I handled the financial plan and app design',
    },
    status: {
      'Conclusion': [
        ''
      ],
      'Reflection': 'Although I was initially dissapointed to miss the personal opportunity to build the vision system for this project, I was satisfied with learning many of the business aspects that were not available elsewhere in the course content.',
    },
  },
  { title: 'Matlab Table Tennis Simulator',
    date: 'Dec 2017',
    short: 'Mechanics of Sports Equipment Project',
    question: 'Would Table Tennis be more entertaining on a bigger table?',
    stack: [
      'MATLAB',
    ],
    method: {
      'Simulation': 'The physics of Tabble Tennis can be divied into two states: flight and impact. In flight, the trajectory of a [x]cm, [y]g smooth projectile is strongly subjected to spin forces, Magnus forces, [...]. The hardness of both table and ball contribute to one of the briefest impacts in sport, but still surface and deformation effects are highly influential.',
      'GUI': 'From starting position, strike angle and outgoing velocity, animate and trace the balls flight across the table, then then display flight time and end velocity at the opponent.',
    },
    status: {
      'Conclusion': [
        'Drop Shots',
        'More time',
        'Running game',
      ],
      'Reflection': [
        'Looked great on workstation, almost killed my laptop.',
        'Got highest mark on assignment.',
      ],
    },
  },
  { title: 'Bachelors Degree Dissertation',
    date: 'Apr 2017',
    short: 'BEng Sports Technology with First Class Honours',
    question: 'How does shoe choice effect lower limb [shock / vibrations] while running?',
    stack: [
      'IMU',
      'Arduino',
      'MATLAB',
    ],
    method: {
      'Experiment': 'I recruited [n] people to run 3 laps of ~12min around a local park. Each time wearing a different design of shoe. Using an IMU, I measured accelerations at the top of the shin.',
      'Analysis': 'I wrote a MATLAB script to; apply a high- and low-pass filter, detect peaks, and plot the result.<br />To model the effects on the bones, I constructed a free body diagram, and input values from medical journal papers.<br />Finally, I conducted a factorial analysis, [with factors such as] bone density, weight, speed of bone remodelling... , to provide context for the differences in shock between the shoes.',
    },
    status: {
      'Conclusion': [
        'More foam on the shoe, less shock through the shin',
        'Materials are <strong>very</strong> important',
        'Shoes are the [x] principal component, and account for [y]% of the variance in total strain on the lower leg.'
      ],
      'Reflection': [
        '',
      ],
    },
  },

]

export default timeline_text
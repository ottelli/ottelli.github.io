import { ITimelineEntry } from "../components/Timeline";

export const timeline_text: ITimelineEntry[] = [
  {
    title: "Persistence",
    date: "Jan 2022",
    description: "Training calendar app",
    brief:
      "<b>Design Brief:</b> Create a training calendar, with review and planning. Use gathered data to generate and present insights visually.",
    stack: ["Python", "Flask", "Go", "TypeScript", "React", "Redux", "Sass"],
    method: {
      Backend:
        "Starting with a <b>REST</b> API witten with the <b>Flask</b> microframework, I implemented an SQLite ORM to manage a <b>relational users database</b>, and a separate JSON <b>document database</b> for activities. Both are secured with <b>OAuth2.0</b> standard token authorization on an independant server written in <b>Go</b>. This project also required writing a file <b>parsing algorithm</b> to read data from Garmin watches.",
      Frontend:
        "To deploy across devices and platforms from a single codebase, I made use of a <b>Progressive Web App</b> architecture. The UI is built with <b>React 18</b> function components, written in <b>TypeScript</b> and tested with <b>Jest</b>. I chose <b>Vite</b> as a build tool and hosted on <b>Firebase</b>, as these were both new tools to me that I had been looking for an opportunity to try out in a project. This project uses all custom components with <b>SCSS</b>. But in the design phase I used the Bootstrap library to plan out the interfaces.",
    },
    status: {
      Progress: [
        "All back-end services are production ready.",
        "Fully responsive design for Web and Mobile, with offline available on Mobile through PWA features.",
        "All desired features implemented on the Calendar view, only edge case testing and fixes needed.",
        "The Insights view is fully scoped, and wireframed.",
      ],
      Next: [
        "Core logic and UI for the Insights view.",
        "At the moment, adding data to the app is done by direct upload. API integrations with larger platforms like Strava, Garmin, Apple Health etc. would reduce friction and aid adoption.",
      ],
    },
  },
  {
    title: "Rho Technologies",
    date: "Oct 2022",
    description: "Business website",
    brief:
      "<b>Design Brief:</b> Design and build an eye-catching business website for advertising products and gaining customers.",
    stack: ["TypeScript", "React", "Tailwind"],
    method: {
      Implemention:
        "I decided to build this site with the <b>NextJS</b> framework to take advantage of optional API routes, as only contact form submissions are required on day-one, with scope for adding more functionality as needed, such as content delivery for marketing materials, or handling support tickets.<br/>Clean and repsonsive design viewable cross-platform, with reusable product pages. The site is built with NextJS, styled with TailwindCSS, hosted on Firebase.",
    },
    status: {
      Progress: "",
      Next: "",
    },
  },
  {
    title: "First Python Code",
    date: "Nov 2019",
    description: "My favourite card game, on the command line",
    brief:
      "<b>Design Brief:</b>Build a game with all the rules and gameplay features of the real thing.",
    stack: ["Python"],
    method: {
      Gameplay:
        "Players deal the whole deck between them. Play is split into hands, started by the winner of the previous. They may start with any number of cards with the same value (eg. 9s or Queens), with the same multiple of cards used throughout the hand. Players put down cards of higher value until all but one, has declined to continue playing. There are also wildcards; 8s skip players, 7s reverses value so the lowest card wins, and the joker substitutes as a multiple of another card. And some idiosyncratic features, like the lowest value card being a 3, then up through King, Ace then 2s being the highest. Except for 3-Spades, which is a trump card. As well as rules against winning the game with the 3-Spades or playing the joker to start a hand.",
      Interface:
        "Text based on the command line. All players on one machine, with the screen cleared between each. Players are told the last cards played and have their hand, split into multiples, sorted by value, shown to them as an indexed list. They input an index to play their turn. Based on the game state there may be follow up decisions, like splitting cards or using the joker.",
    },
    status: {
      Conclusion: [
        "It was possible! I declared this project a success when my friends and I were playing and began to feel some of the tension that exists in our real games...",
      ],
      Reflection: [
        "Coming from Matlab, I enjoyed learning Python a lot! A major change was moving from the Matlab IDE with f1-Help to a text editor and terminal, open-source packages and learning from documentation.",
        "I was familiar with some basic programming concepts, so in this project I focused on using classes and inheritance and learning language features like list comprehension.",
        "Finishing this project, I felt confident to start working on technical projects using Python.",
      ],
    },
  },
  {
    title: "IMUs for Gait Non-Linearities & Skill",
    date: "Jun 2018",
    description: "Masters thesis project",
    brief:
      "<b>Research Question:</b> Can non-linearities in gait predict running economy?",
    stack: ["IMU", "MATLAB"],
    method: {
      Experiment: "Recruited [n] people. Gas analysis + Gait analysis.",
      Analysis: "Vectorisation. DFA. SampEnt.",
    },
    status: {
      Conclusion: [
        "Everyone has a velocity-variability sweet-spot in their running gait, which is most efficient for them.",
        "J-shape Function. Expert is shifted to the right, deeper and wider trough",
      ],
      Reflection: ["Consequent Hypotheses: Adaptation to terrain."],
    },
  },
  {
    title: "Computer Vision & Biofeedback",
    date: "Mar 2018",
    description: "Prototype and business plan",
    brief:
      "<b>Design Brief:</b> How to prevent back injuries from deadlifting?",
    stack: ["Android", "MATLAB"],
    method: {
      Task: "Help a sports injury, with technology.",
      Solution:
        "A camera purchased by gyms, placed to the side when deadlifting. Together with an Android app to give live feedback and record sessions.",
      "Team Role": "I handled the financial plan and app design",
    },
    status: {
      Conclusion: [""],
      Reflection: "",
    },
  },
  {
    title: "Table Tennis Simulator",
    date: "Dec 2017",
    description: "Physics model with GUI in Matlab",
    brief:
      "<b>Research Question:</b> Would Table Tennis be more entertaining on a bigger table?",
    stack: ["MATLAB"],
    method: {
      Simulation:
        "The physics of Tabble Tennis can be divied into two states: flight and impact. In flight, the trajectory of a [x]cm, [y]g smooth projectile is strongly subjected to spin forces, Magnus forces, [...]. The hardness of both table and ball contribute to one of the briefest impacts in sport, but still surface and deformation effects are highly influential.",
      GUI: "From starting position, strike angle and outgoing velocity, animate and trace the balls flight across the table, then then display flight time and end velocity at the opponent.",
    },
    status: {
      Conclusion: ["Drop Shots", "More time", "Running game"],
      Reflection: [
        "Looked great on workstation, almost killed my laptop.",
        "Got highest mark on assignment.",
      ],
    },
  },
  {
    title: "IMUs for Running Injury Risk",
    date: "Apr 2017",
    description: "Bachelors dissertation project",
    brief:
      "<b>Research Question:</b> How does shoe choice effect lower limb [shock / vibrations] while running?",
    stack: ["IMU", "Arduino", "MATLAB"],
    method: {
      Experiment:
        "I recruited [n] people to run 3 laps of ~12min around a local park. Each time wearing a different design of shoe. Using an IMU, I measured accelerations at the top of the shin.",
      Analysis:
        "I wrote a MATLAB script to; apply a high- and low-pass filter, detect peaks, and plot the result.<br/>To model the effects on the bones, I constructed a free body diagram, and input values from medical journal papers.<br/>Finally, I conducted a factorial analysis, [with factors such as] bone density, weight, speed of bone remodelling... , to provide context for the differences in shock between the shoes.",
    },
    status: {
      Conclusion: [
        "More foam on the shoe, less shock through the shin",
        "Materials are <b>very</b> important",
        "Shoes are the [x] principal component, and account for [y]% of the variance in total strain on the lower leg.",
      ],
      Reflection: [""],
    },
  },
];

export default timeline_text;

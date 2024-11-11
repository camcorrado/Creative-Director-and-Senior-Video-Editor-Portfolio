import PORTFOLIO from "./Pics/PortfolioLanding.jpg";
import MEMORY from "./Pics/MemoryGame.png";
import UICHALLENGES from "./Pics/UIChallenges.png";
import DBD from "./Pics/DBDQuiz.png";
import TOGETHER from "./Pics/Together.jpg";
import SUGGEST from "./Pics/Suggest.jpg";
import GARDENR from "./Pics/Gardenr.jpg";

const projects = [
  {
    id: 0,
    name: "Creative Director & Senior Video Editor Portfolio",
    image: PORTFOLIO,
    alt: "Portfolio Screenshot",
    description: `Pretty meta, right? I hope you're enjoying your experience here on my responsive portfolio!`,
    mediums: "React + Vite, HTML, CSS, JavaScript, Adobe Creative Suite",
    link: "https://camcorrado.com/",
    repoClient:
      "https://github.com/camcorrado/Creative-Director-and-Senior-Video-Editor-Portfolio",
    repoServer: null,
  },
  {
    id: 1,
    name: "Memory Game",
    image: MEMORY,
    alt: "Memory Game Screenshot",
    description: `A card matching memory game to showcase my skill set in vanilla HTML, CSS, & JavaScript. This app provides difficulty options that switch up the card styles as well as feedback for correct and incorrect guesses.`,
    mediums: "HTML, CSS, JavaScript",
    link: "https://camcorrado.github.io/Memory-Game/",
    repoClient: "https://github.com/camcorrado/Memory-Game",
    repoServer: null,
  },
  {
    id: 2,
    name: "UI Challenges",
    image: UICHALLENGES,
    alt: "UI Challenges Screenshot",
    description: `20 UI challenges to test my skill & creativity.`,
    mediums: "React + Vite, HTML, CSS, JavaScript, Adobe Creative Suite",
    link: "https://camcorrado.github.io/UI-Challenges/",
    repoClient: "https://github.com/camcorrado/UI-Challenges",
    repoServer: null,
  },
  {
    id: 3,
    name: "Together",
    image: TOGETHER,
    alt: "Together Screenshot",
    description: `Together brings LGBTQ+ locals together based on distance and mutual interests! Users can edit their profile, favorite, block, unblock, and message other users, change their password, and much more!`,
    mediums: "React, CSS, Node, Express, PostgreSQL",
    link: null,
    repoClient: "https://github.com/camcorrado/Together",
    repoServer: "https://github.com/camcorrado/Together-API",
  },
  {
    id: 4,
    name: "Suggest",
    image: SUGGEST,
    alt: "Suggest Screenshot",
    description: `Suggest allows users to submit and support suggestions to reach a common goal.`,
    mediums: "React, HTML, CSS, JavaScript, Node, Express, PostgreSQL",
    link: null,
    repoClient: "https://github.com/camcorrado/Suggest",
    repoServer: "https://github.com/camcorrado/Suggest-Server",
  },
  {
    id: 5,
    name: "Gardener",
    image: GARDENR,
    alt: "Gardener Screenshot",
    description: `Gather all of your garden's information in one place: watering frequency, fertilizer frequency, mature height, & more!`,
    mediums:
      "React, HTML, CSS, JavaScript, Node, Express, PostgresSQL, Adobe Creative Suite",
    link: null,
    repoClient: "https://github.com/camcorrado/Gardener",
    repoServer: null,
  },
  {
    id: 6,
    name: "Dead By Daylight Quiz",
    image: DBD,
    alt: "Dead By Daylight Quiz Screenshot",
    description:
      "This quiz based on the hit horror game Dead By Daylight provides the user audio & visual feedback based on their choices.",
    mediums: "jQuery, HTML, CSS, JavaScript, Adobe Creative Suite",
    link: "https://camcorrado.github.io/Dead-By-Daylight-Quiz/",
    repoClient: "https://github.com/camcorrado/Dead-By-Daylight-Quiz-App-Final",
    repoServer: null,
  },
];

export default projects;

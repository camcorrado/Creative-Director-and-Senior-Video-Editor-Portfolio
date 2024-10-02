import PORTFOLIO from "./Pics/PortfolioLanding.jpg";
import MEMORY from "./Pics/MemoryGame.png";
import UICHALLENGES from "./Pics/UIChallenges.png";
import DBD from "./Pics/DBDQuiz.png";

const projects = [
  {
    name: "Creative Director & Senior Video Editor Portfolio",
    image: PORTFOLIO,
    alt: "Portfolio Screenshot",
    description: `Pretty meta, right? I hope you're enjoying your experience here on my responsive portfolio!`,
    mediums: "Vite, React, JavaScript, CSS",
    link: "https://camcorrado.com/",
    repoClient:
      "https://github.com/camcorrado/Creative-Director-and-Senior-Video-Editor-Portfolio",
  },
  {
    name: "Memory Game",
    image: MEMORY,
    alt: "Memory Game Screenshot",
    description: `A card matching memory game to showcase my skill set in vanilla HTML, CSS, & JavaScript. This app provides difficulty options that switch up the card styles as well as feedback for correct and incorrect guesses.`,
    mediums: "HTML, CSS, JavaScript",
    link: "https://camcorrado.github.io/Memory-Game/",
    repoClient: "https://github.com/camcorrado/Memory-Game",
  },
  {
    name: "UI Challenges",
    image: UICHALLENGES,
    alt: "UI Challenges Screenshot",
    description: `20 UI challenges to test my skill & creativity.`,
    mediums: "React, CSS",
    link: "https://camcorrado.github.io/UI-Challenges/",
    repoClient: "https://github.com/camcorrado/UI-Challenges",
  },
  {
    name: "Dead By Daylight Quiz",
    image: DBD,
    alt: "Dead By Daylight Quiz Screenshot",
    description:
      "This quiz based on the hit horror game Dead By Daylight provides the user audio & visual feedback based on their choices.",
    mediums: "HTML, CSS, jQuery, Adobe Photoshop & Audition",
    link: "https://camcorrado.github.io/Dead-By-Daylight-Quiz/",
    repoClient: "https://github.com/camcorrado/Dead-By-Daylight-Quiz-App-Final",
  },
];

export default projects;

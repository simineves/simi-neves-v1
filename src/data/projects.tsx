export const projects: IProject[] = [
    {
      name: "BOAT",
      tools: ["Express", "MongoDB", "React", "Node"],
      image: "https://i.ibb.co/hKGygtx/wave.jpg",
      description:
        "Web app",
      link: "https://omegu.herokuapp.com/"
    },
    {
      name: "Clues Auxilium",
      tools: ["Python", "Flask", "React"],
      image: "https://i.ibb.co/k4p8bnF/applyai.jpg",
      description:
        "Web app.",
      link: "https://omegu.herokuapp.com/"
    },
  ];
  
  export interface IProject {
    name: string;
    tools: string[];
    image: string;
    description: string;
    link: string;
  }

export const projects: IProject[] = [
    {
      name: "BOAT",
      tools: ["React", "MongoDB", "Node", "Express"],
      image: require("../assets/screenshots/boat.png"),
      description:
        "The BOAT app was built mimicking a team-client collaborative interaction, leveraging the MERN full-stack for a dashboard application integrating functionality from a custom-made API.",
      link: "https://github.com/big-brainers"
    },
    {
      name: "SF Facilities Map",
      tools: ["React", "Leaflet", "Netlify", "SWR"],
      image: require("../assets/screenshots/sf.png"),
      description:
        "This project is a single-page app that features an interactive map of San Francisco, displaying the location of all city facilities. It allows for searching of specific facilities by name or department, making it easy to find what you need quickly.",
      link: "https://github.com/simineves/SF_Facilities_Map"
    },
  ];
  
  export interface IProject {
    name: string;
    tools: string[];
    image: string;
    description: string;
    link: string;
  }

import { ProjectType } from "./types/ProjectType"
/**
 * A list of projects
 */
const Projects:ProjectType[] = [
    {
        name: "Lava Demo",
        description: `
        This Unity project is a 2D platformer designed as a testing ground for various mechanics that will be used in my future platforming games. The tools and features developed here are created with a focus on reusability. During this project, I gained valuable experience in implementing concepts like the observer pattern, which proved useful for handling player deaths and stage resets.`,
        imgUrl: "/static/images/projects/lava-demo.png",
        altImgText: "Project Image Lava Demo",
        projectLink: "https://play.unity.com/mg/other/webgl-builds-327790",
        ariaLabel: "Lava Demo Link",
        projectSrc: "https://github.com/treyarte/2d-platform-tutorial",
        technologies: [
            "Unity",
            "C# .NET",
            "WebGL"
        ]
    },
    {
        name: "My Droplist",
        description: `At Costco, we frequently hear the phrase "It wasn't on the list." A paper droplist is created by a stocker and given to a forklift driver. However, using paper for this process leads to problems. To fix these issues, I created My Droplist, a tool that provides tracking of droplist.`,
        imgUrl: "/static/images/projects/mydroplist-web.png",
        altImgText: "Project Image My Droplist",
        projectLink: "https://mydroplist.onrender.com",
        ariaLabel: "My Droplist Link",
        projectSrc: "https://github.com/treyarte/capstone-one",
        technologies: [
            "Python",
            "Flask",
            "JavaScript",
            "Jinja2",
            "SQLAlchemy",
            "PostgreSQL"
        ]
    },
    {
        name: "My Droplist Mobile",
        description: `This mobile version sets out to be an improvement of the web version. My Droplist web app used a responsive design to make it feel natural on the phone. Since it was a web application, features such as swiping and notifications could not be utilized, thus making the app not a truly mobile experience.`,
        imgUrl: "/static/images/projects/mydroplist-mobile.png",
        altImgText: "Project Image Lava Demo",
        projectLink: "#",
        ariaLabel: "My Droplist Mobile Link",
        projectSrc: "https://github.com/treyarte/capstone-two",
        technologies: [
            "JavaScript",
            "React Native",
            "PostgreSQL",
            "Node.JS",
            "Express"
        ]
    },
    {
        name: "Connect Four",
        description: `I crafted a Connect Four game using solely HTML, CSS, and vanilla JavaScript, showcasing that a framework isn't always essential for creating enjoyable applications. It marked one of my initial adventures into game development.`,
        imgUrl: "/static/images/projects/connect-four.png",
        altImgText: "Project Image Connect Four",
        projectLink: "https://treyarte.github.io/connectfour",
        ariaLabel: "Connect Four Link",
        projectSrc: "https://github.com/treyarte/connectfour",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
]

export default Projects;
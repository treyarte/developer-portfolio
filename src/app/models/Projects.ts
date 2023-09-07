import { ProjectType } from "./types/ProjectType"

const Projects:ProjectType[] = [
    {
        name: "2D Platformer Demo",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        In repellat officia sint dolores magnam fugiat excepturi esse vel atque recusandae inventore, 
        eaque accusamus obcaecati doloribus ducimus. Aperiam unde ab temporibus.`,
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
        description: `A web application that was created for my capstone project at Springboard's coding bootcamp. 
        The app helps facilitate better communication between stockers and forklift drivers and provide record-keeping for users. 
        See your forklift drivers' performance by creating graphs of the droplists they have completed, accepted, and declined.`,
        imgUrl: "/static/images/projects/mydroplist-web.png",
        altImgText: "Project Image My Droplist",
        projectLink: "https://play.unity.com/mg/other/webgl-builds-327790",
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
        description: `My Droplist is a mobile app for creating droplist for forklift drivers and stockers. 
        improving upon the previous web version, it adds mobile-specific features like droplist notifications, 
        swiping for item viewing, and simplified droplist creation. These enhancements create a better mobile experience and encourage more users to utilize the app.`,
        imgUrl: "/static/images/projects/mydroplist-mobile.png",
        altImgText: "Project Image Lava Demo",
        projectLink: "https://play.unity.com/mg/other/webgl-builds-327790",
        ariaLabel: "Lava Demo Link",
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
        description: `Connect four browser game written JavaScript`,
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
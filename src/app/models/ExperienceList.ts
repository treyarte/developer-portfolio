import Experience, { IExperience } from "./Experience";

export const experienceList:IExperience[] = [
    new Experience(
        {
            jobTitle: "Software Developer",
            company: "Bouncing Pixel",
            years: "2021 - Current",
            description: "Specialize in delivering top-notch, user-friendly web applications within a highly communicative environment, fostering strong collaboration between clients and team members. My toolkit includes leveraging technologies like Docker to preserve legacy projects on hosting providers. I have hands-on experience with C# .Net APIs and TypeScript, which I've utilized to develop a Learning Management System (LMS) and an analytical dashboard for our clients.",
            skills: ["React", "Next.JS", ".NET", "C#", "MongoDB", "Chart.JS", "Node.JS", 
            "Azure", "Heroku", "Postgresql", "Docker", "TypeScript", 
            "Azure Functions", "CSS", "HTML", "Leaflet", "D3"],
            url: "https://www.bouncingpixel.com"
        }
    ),
    new Experience(
        {
            jobTitle: "Student",
            company: "Springboard Software Engineering",
            years: "2020 - 2021",
            description: `700+ hours of hands-on course material, with 1:1 industry expert mentor
            oversight, and completion of 2 in-depth portfolio projects. Mastered skills in front-end
            web development, back-end web development, databases, and data structures and
            algorithms.`,
            skills: ["React", "CSS", "JS", "Bootstrap", "Node.JS", "Heroku", "Postgresql", "Python", "Flask", "Jest"],
            url: "/static/files/treyvion_johnson_certificate.pdf"
        }
    ),
    new Experience(
        {
            jobTitle: "Produce Stocker",
            company: "Costco",
            years: "2018 - 2021",
            description: "I thrived in a fast-paced work environment, skillfully managing a substantial workload while consistently upholding company standards and meeting deadlines efficiently. My ability to communicate effectively with team members allowed us to deliver exceptional service to our customers. I bolstered customer confidence by actively listening to their concerns and offering pertinent feedback.",
            skills: ["Communication", "Team Work", "Customer Service", "Time Management", "Organization"],
            url: "https://www.costco.com"
        }
    ),
    new Experience(
        {
            jobTitle: "Software Developer Intern",
            company: "Borehole Seismic",
            years: "2016 - 2017",
            description: "I developed a 3D visualization app using C# .NET and PostgreSQL for Geoscientists. Collaborated on a Ruby on Rails app with Git for improved communication. Overhauled the UI with JQuery and Bootstrap, boosting employee workflow by 98%. Enhanced the Rails app by troubleshooting, refining, and adding features, eliminating data inaccuracies. Worked with management to prioritize needs and find solutions",
            skills: ["Unity", ".NET", "C#", "MYSQL", "SQL", "Ruby on Rails", "JQuery", "JavaScript", "Bootstrap"],
            url: "https://boreholeseismic.com/index.html"
        }
    ),
    new Experience(
        {
            jobTitle: "Student",
            company: "University of Houston",
            years: "2012 - 2016",
            description: `I designed and developed a web-based CRM application using Ruby on Rails and Microsoft SQL Server 2012, effectively supporting company growth. This application was subsequently deployed on Windows Server 2012, utilizing Puma for the application server and Apache for the web server. I crafted the user interface with HTML, CSS, and JavaScript, ensuring a user-friendly experience.
            Furthermore, I designed and coded an information system in Java that improved the efficiency and accuracy of the company's mileage system. This involved detecting data retrieval issues, coordinating performance tests, and optimizing data retrieval with SQL query statements.`,
            skills: ["Ruby On Rails", "Java", "C++", "PHP", "Microsoft SQL", "Oracle", "SQL", "Window Server 2012",],
            url: "https://www.uh.edu"
        }
    )
]
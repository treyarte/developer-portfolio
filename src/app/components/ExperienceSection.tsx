import Experience, { IExperience } from "../models/Experience";
import ExperienceCard from "./utils/ExperienceCard";
import SectionTitle from "./utils/SectionTitle";
import Timeline from "./utils/timeline/Timeline";

const listOfExperience:IExperience[] = [
    new Experience(
        {
            jobTitle: "Software Developer",
            company: "Bouncing Pixel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste culpa labore aut suscipit ab, aliquid praesentium cum iure dignissimos itaque! Dolores ab tempore ut sunt minima. Voluptatibus, asperiores modi?",
            skills: ["React", "Next.JS", ".NET", "C#", "MongoDB", "Chart.JS", "Node.JS", "Azure", "Heroku", "Postgresql"],
            url: "https://www.bouncingpixel.com"
        }
    ),
    new Experience(
        {
            jobTitle: "Software Developer",
            company: "Bouncing Pixel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste culpa labore aut suscipit ab, aliquid praesentium cum iure dignissimos itaque! Dolores ab tempore ut sunt minima. Voluptatibus, asperiores modi?",
            skills: ["React", "Next.JS", ".NET", "C#", "MongoDB", "Chart.JS", "Node.JS", "Azure", "Heroku", "Postgresql"],
            url: "https://www.bouncingpixel.com"
        }
    ),
    new Experience(
        {
            jobTitle: "Software Developer",
            company: "Bouncing Pixel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste culpa labore aut suscipit ab, aliquid praesentium cum iure dignissimos itaque! Dolores ab tempore ut sunt minima. Voluptatibus, asperiores modi?",
            skills: ["React", "Next.JS", ".NET", "C#", "MongoDB", "Chart.JS", "Node.JS", "Azure", "Heroku", "Postgresql"],
            url: "https://www.bouncingpixel.com"
        }
    ),
    new Experience(
        {
            jobTitle: "Software Developer",
            company: "Bouncing Pixel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste culpa labore aut suscipit ab, aliquid praesentium cum iure dignissimos itaque! Dolores ab tempore ut sunt minima. Voluptatibus, asperiores modi?",
            skills: ["React", "Next.JS", ".NET", "C#", "MongoDB", "Chart.JS", "Node.JS", "Azure", "Heroku", "Postgresql"],
            url: "https://www.bouncingpixel.com"
        }
    )
]

/**
 * Component that renders the Experience section
 * @returns 
 */
export default function ExperienceSection() {

    /**
     * creates an array of experience card components
     */
    const createExperienceCardArr = () => { 
        return listOfExperience.map(exp => (
            <ExperienceCard experience={exp}/>
        ))
    }

    return (
        <section id="experience" className="h-[calc(100vh-var(--navbar-height))] pt-28">
            <SectionTitle
                titleText="03. Experience"
                backgroundText="Experience"
            />
            <div className="mt-20">
                <Timeline 
                    timelineItems={createExperienceCardArr()}
                />
            </div>
        </section>
    )
}
import Experience, { IExperience } from "../model/Experience";
import ExperienceCard from "./utils/ExperienceCard";
import SectionTitle from "./utils/SectionTitle";

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
]

/**
 * Component that renders the Experience section
 * @returns 
 */
export default function ExperienceSection() {

    return (
        <section id="experience" className="h-[calc(100vh-var(--navbar-height))] pt-28">
            <SectionTitle
                titleText="03. Experience"
                backgroundText="Experience"
            />
            <div className="mt-20">
                {
                    listOfExperience.map(exp => (
                        <ExperienceCard experience={exp}/>
                    ))
                }
            </div>
        </section>
    )
}
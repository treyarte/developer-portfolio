import Experience, { IExperience } from "../models/Experience";
import { experienceList } from "../models/ExperienceList";
import ExperienceCard from "./utils/ExperienceCard";
import SectionTitle from "./utils/SectionTitle";
import Timeline from "./utils/timeline/Timeline";

/**
 * Component that renders the Experience section
 * @returns 
 */
export default function ExperienceSection() {

    /**
     * creates an array of experience card components
     */
    const createExperienceCardArr = () => { 
        return experienceList.map(exp => (
            <ExperienceCard experience={exp}/>
        ))
    }

    return (
        <section id="experience" className="min-h-[calc(100vh-var(--navbar-height))] pt-48">
            <SectionTitle
                titleText="03. Experience"
                backgroundText="Experience"
            />
            <div className="px-5 sm:px-0">
                <Timeline 
                    timelineItems={createExperienceCardArr()}
                />
            </div>
        </section>
    )
}
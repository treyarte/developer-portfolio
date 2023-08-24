import { IExperience } from "@/app/model/Experience";
import ExperienceSkill from "./ExperienceSkill";

/**
 * Props for the ExperienceCard
 */
export type ExperienceCardProps = {
    experience:IExperience
}

/**
 * Component that renders a card showing experience
 * @param props 
 * @returns 
 */
export default function ExperienceCard(props:ExperienceCardProps) {
    const {experience} = props;

    return (
        <div className="m-h-40 max-w-[520px] flex flex-col gap-3">
            <h3>
                <a href={experience.url} rel="noreferrer" aria-label="Lead Engineer at Bouncing Pixel">
                    <span className="text-lg font-semibold">{experience.jobTitle} - {experience.company}</span>
                </a>
            </h3>
            <p className="">
                {experience.description}
            </p>
            <ul className="flex flex-wrap gap-2">
                {
                    experience.skills.map(skill => (
                        <ExperienceSkill name={skill} />
                    ))
                }
            </ul>
        </div>
    )
}
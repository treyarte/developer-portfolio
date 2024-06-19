import Projects from "../models/Projects";
import SectionTitle from "./utils/SectionTitle";
import ProjectItem from "./utils/projects/ProjectItem";
import ProjectItemMobile from "./utils/projects/ProjectItemMobile";
import {v4 as uuidV4} from 'uuid';

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-[calc(100vh-var(--navbar-height))] pt-28">
            <SectionTitle 
                backgroundText={"Projects"} 
                titleText={"04. Projects"}
            />
            <ul className="flex flex-col justify-center px-5 sm:px-20 md:px-0">
                {
                    Projects.map(project => (
                        <li key={uuidV4()} className="py-5">
                            <ProjectItem project={project}/>
                            <ProjectItemMobile project={project}/>
                        </li>
                    ))
                }
                <li>
                </li>
            </ul>
        </section>
    )
}
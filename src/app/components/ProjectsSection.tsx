import SectionTitle from "./utils/SectionTitle";
import ProjectItem from "./utils/projects/ProjectItem";
import ProjectItemMobile from "./utils/projects/ProjectItemMobile";

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-[calc(100vh-var(--navbar-height))] pt-28">
            <SectionTitle 
                backgroundText={"Projects"} 
                titleText={"04. Projects"}
            />
            <ul className="flex justify-center px-20 md:px-0">
                <li>
                    <ProjectItem/>
                    <ProjectItemMobile/>
                </li>
            </ul>
        </section>
    )
}
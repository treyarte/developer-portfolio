import SectionTitle from "./utils/SectionTitle";

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-[calc(100vh-var(--navbar-height))] pt-28">
            <SectionTitle 
                backgroundText={"Projects"} 
                titleText={"04. Projects"}
            />
        </section>
    )
}
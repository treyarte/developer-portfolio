export type ExperienceSkillProps = {
    name:string
}

export default function ExperienceSkill(props:ExperienceSkillProps) {
    const {name} = props;
    return (
        <div className="rounded-full bg-zinc-700 py-1 px-2">
            {name}
        </div>
    )
}
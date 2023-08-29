import { SkillHelper } from "@/app/helpers/SkillHelper";
import { skillEnum } from "@/app/models/enums/SkillEnum";
import { useEffect } from "react";
export default function FloatingIcon() {
    const getEnumName = (skillName:string) => (skillEnum[skillName as keyof typeof skillEnum])
    return (
        <ul className="px-5 md:px-0 flex gap-10 flex-wrap justify-center lg:justify-start">
            {
                SkillHelper.getSkills().map(skillIcon => (
                    <li className="w-16 flex flex-col">
                        <img
                            className="w-max animate-wiggle rounded-full bg-white p-1" 
                            src={skillIcon.imgUrl} alt={`Skill Icon ${getEnumName(skillIcon.skill)}`}
                        />
                        <div className="self-center">{getEnumName(skillIcon.skill)}</div>
                    </li>
                ))
            }            
        </ul>
    )
}
import { SkillHelper, skillEnum } from "@/app/helpers/SkillHelper";
import { useEffect } from "react";
export default function FloatingIcon() {
    const getEnumName = (skillName:string) => (skillEnum[skillName as keyof typeof skillEnum])
    return (
        <div className="flex gap-10 flex-wrap text-center">
            {
                SkillHelper.getSkills().map(skillIcon => (
                    <div className="w-16 flex flex-col">
                        <img
                            className="w-max animate-wiggle rounded-full bg-white p-1" 
                            src={skillIcon.imgUrl} alt={`Skill Icon ${getEnumName(skillIcon.skill)}`}
                        />
                        <div>{getEnumName(skillIcon.skill)}</div>
                    </div>
                ))
            }

            
        </div>
    )
}
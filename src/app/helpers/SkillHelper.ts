import { skillEnum } from "../models/enums/SkillEnum";
import { SkillIcon } from "../models/types/SkillIcon";

/**
 * Class with static methods for configuring skill icons
 */
export class SkillHelper {    
    private static baseImgUrl = "/static/images/icons/icon";

    /**
     * Creates an array of skillIcons use the skill enum
     * @returns 
     */
    public static getSkills =() =>{
        return Object.keys(skillEnum).map((skill) => {            
            const skillIcon:SkillIcon = {
                skill:skill as skillEnum,                
                imgUrl: `${this.baseImgUrl}-${skill}.svg`
            }

            return skillIcon;
        })
    }
}
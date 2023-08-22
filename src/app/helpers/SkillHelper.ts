/**
 * Enum for skills Trey has
 */
export enum skillEnum {
    csharp = "C#/.Net",
    javaScript = "JavaScript",
    go = "Go",
    python = "Python",
    nextjs = "Next.JS",
    node = "Node.js",
    flask = "Flask",
    azure = "Azure",
    heroku = "Heroku",
    docker = "Docker",
    mongodb = "Mongo DB",
    psql = "Postgresql",
    css = "CSS",
    html = "HTML",
    tailwind = "Tailwind",
    unity = "Unity",
}

/**
 * A type of icon
 */
export type SkillIcon = {
    skill:skillEnum,
    imgUrl:string,    
}

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
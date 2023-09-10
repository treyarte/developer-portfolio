/**
 * Interface for the Experience class
 */
export interface IExperience {
    jobTitle:string;
    company:string;
    years:string;
    description:string;
    skills:string[];
    url:string;
}

/**
 * Class for holding job experience information
 */
export default class Experience implements IExperience {
    constructor(exp:IExperience) {
        this.jobTitle = exp.jobTitle;
        this.company= exp.company;
        this.description = exp.description;
        this.years = exp.years;
        this.skills = exp.skills;        
        this.url = exp.url;
    }
    jobTitle: string;
    company: string;
    years: string
    description: string;
    skills: string[];   
    url: string;
}
/**
 * properties for a project obj
 */
export type ProjectType = {
    name:string;
    job:string;
    description:string;
    imgUrl:string;
    altImgText:string;
    projectLink:string;
    ariaLabel:string;
    projectSrc:string;
    technologies:string[];    
    isLive:boolean;
    isRepoLive:boolean;
}
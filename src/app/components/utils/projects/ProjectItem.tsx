import { ProjectType } from '@/app/models/types/ProjectType';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './ProjectItem.module.css';

export type ProjectItemProps = {
    project:ProjectType
}

export default function ProjectItem(props:ProjectItemProps) {
    const {
        name,
        description,
        imgUrl,
        altImgText,
        projectLink,
        ariaLabel,
        projectSrc,
        technologies
    } = props.project;

    const createBeforeImage = () => {
        if(name === "My Droplist") {
            return `before:bg-mydroplist-web`
        } else if (name === "My Droplist Mobile") {
            return `before:bg-mydroplist-mobile`
        } else if (name === "Connect Four") {
            return `before:bg-connect-four`
        } else {
            return `before:bg-lava-demo`    
        }        
    }

    return (
        <div className="md:flex flex-row md:justify-center hidden">
            <div className="relative w-[300px] lg:min-w-[580px] max-h-[364px]">
                <div className={`w-full ${styles["project-img-container"]} 
               ${createBeforeImage()} top-0 z-0 right-[-25%] rounded-md max-h-[364px]`}>
                    <img className="w-full rounded-md invisible"
                        src={imgUrl} alt={altImgText} />
                </div>
            </div>
            <div className="min-h-[300px pt-14 text-right z-[1] px-[100px]">
                <div className="text-lg text-portfolio-orange">Featured Project</div>
                <h4 className="text-2xl hover:text-portfolio-orange mb-5 w-fit inline-block">
                    <a 
                        href={projectLink}
                        target="blank" aria-label={ariaLabel}
                    >
                        {name}
                    </a>                    
                </h4>
                <p className="max-w-[500px] px-5 py-5 bg-zinc-800 rounded-md mb-5 text-left">
                    {description}
                </p>
                <ul className="max-w-[500px] flex flex-row text-right justify-end gap-5 flex-wrap">
                    {technologies.map(tech => (
                        <li className='bg-zinc-800 rounded-md p-1'>{tech}</li>
                    ))}                                                            
                </ul>
                <ul className="flex flex-row justify-end mt-5 gap-5">
                    <li>
                        <a target="blank" href={projectSrc} 
                            aria-label='Source Code Link' className="text-xl cursor-pointer hover:text-zinc-300">
                                <GitHubIcon/>
                        </a>                       
                    </li>
                    <li>
                        <a target="blank" href={projectLink} 
                            className="text-xl cursor-pointer hover:text-zinc-300">
                                <OpenInNewIcon/>
                        </a>                       
                    </li>
                </ul>
            </div>
        </div>
    )
}
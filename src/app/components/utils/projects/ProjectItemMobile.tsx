import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectItemProps } from './ProjectItem';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {v4 as uuidV4} from 'uuid';

export default function ProjectItemMobile(props:ProjectItemProps) {
    const {
        name,
        description,
        projectLink,
        ariaLabel,
        projectSrc,
        isLive,
        isRepoLive,
        technologies
    } = props.project;

    const createBgImg = () => {
        if(name === "My Droplist") {
            return `bg-mydroplist-web`
        } else if (name === "My Droplist Mobile") {
            return `bg-mydroplist-mobile`
        } else if (name === "Connect Four") {
            return `bg-connect-four`
        } else if (name === "CBIT Trainer Marketing Site"){
            return `bg-cbit-marketing`
        } else if (name === "Feed It Games") {
            return `bg-feed-it`
        }  
        else {
            return `bg-lava-demo`    
        }        
    }
    return (
        <div className={`md:hidden ${createBgImg()} bg-cover rounded-md`}>
            <div className="min-h-[300px pt-14 z-[1] px-10 py-5 bg-zinc-800 rounded-md bg-opacity-80">
                <div className="text-lg text-portfolio-orange">Featured Project</div>
                <h4 className="text-2xl hover:text-portfolio-orange mb-5 w-fit inline-block">
                    <a 
                        href={projectLink}
                        target="blank" aria-label={ariaLabel}
                    >
                        {name}
                    </a>                    
                </h4>
                <p className="max-w-[500px] mb-5">
                    {description}
                </p>
                <ul className="flex flex-row text-right justify-end gap-5 flex-wrap">
                    {technologies.map(tech => (
                        <li key={uuidV4()}>{tech}</li>
                    ))}  
                </ul>
                <ul className="flex flex-row flex-wrap gap-5">
                    {isRepoLive && (

                        <li>
                        <a target="blank" href={projectSrc} 
                            className="text-xl cursor-pointer hover:text-zinc-300">
                                <GitHubIcon/>
                        </a>                       
                    </li>
                    )}
                    {
                        isLive && (
                        <li>
                            <a target="blank" href={projectLink} 
                                className="text-xl cursor-pointer hover:text-zinc-300">
                                <OpenInNewIcon/>
                            </a>                       
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
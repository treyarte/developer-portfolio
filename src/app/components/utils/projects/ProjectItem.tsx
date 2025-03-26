import { ProjectType } from '@/app/models/types/ProjectType';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './ProjectItem.module.css';
import {v4 as uuidV4} from 'uuid';
import Image from 'next/image';

export type ProjectItemProps = {
    project:ProjectType
}

export default function ProjectItem(props:ProjectItemProps) {
    const {
        name,
        description,
        job,
        imgUrl,
        altImgText,
        projectLink,
        ariaLabel,
        projectSrc,
        technologies,
        isLive,
        isRepoLive,
    } = props.project;

    const createBeforeImage = () => {
        if(name === "My Droplist") {
            return `before:bg-mydroplist-web`
        } else if (name === "My Droplist Mobile") {
            return `before:bg-mydroplist-mobile`
        } else if (name === "Connect Four") {
            return `before:bg-connect-four`
        } else if (name === "CBIT Trainer Marketing Site") {
            return `before:bg-cbit-marketing`    
        } else if (name === "Feed It Games") {
            return `before:bg-feed-it`
        }         
        else {
            return `before:bg-lava-demo`    
        }        
    }

    return (
        <div className="md:flex flex-row md:justify-center hidden">
            <div className="relative w-[300px] lg:min-w-[580px] max-h-[364px]">
                <div className={`w-full ${styles["project-img-container"]} 
               ${createBeforeImage()} top-0 z-0 right-[-25%] rounded-md max-h-[364px]`}>
                    <Image 
                        width={580}
                        height={465}
                        className="w-full rounded-md invisible"
                        src={imgUrl} 
                        alt={altImgText}                        
                    />                                             
                </div>
            </div>
            <div className="min-h-[300px pt-14 text-right z-[1] px-[100px]">
                <div className="text-lg text-portfolio-orange">Featured Project</div>
                <h4 className={`text-2xl ${isLive && ('hover:text-portfolio-orange')}  mb-2 w-fit inline-block`}>
                    {
                        isLive ? 
                        (
                            <a 
                            href={projectLink}
                            target="blank" aria-label={ariaLabel}
                        >
                            {name}
                        </a>  
                        ) 
                        : 
                        (
                            <>
                            {name}
                            </>
                        )
                    }                 
                </h4>
                <div className='mb-5'>
                    <span className='text-1xl font-bold'>Job:{" "}</span> {job}
                </div>
                <p className="max-w-[500px] px-5 py-5 bg-zinc-800 rounded-md mb-5 text-left">
                    {description}
                </p>
                <ul className="max-w-[500px] flex flex-row text-right justify-end gap-5 flex-wrap">
                    {technologies.map(tech => (
                        <li key={uuidV4()} className='bg-zinc-800 rounded-md p-1'>{tech}</li>
                    ))}                                                            
                </ul>
                <ul className="flex flex-row justify-end mt-5 gap-5">
                {isRepoLive && (
                    <li>
                        <a target="blank" href={projectSrc} 
                            aria-label='Source Code Link' className="text-xl cursor-pointer hover:text-zinc-300">
                                <GitHubIcon/>
                        </a>                       
                    </li>
                )}
                    {isLive && (

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
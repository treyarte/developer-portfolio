import { TimelinePosEnum } from '@/app/models/enums/TimelinePosEnum';
import { ReactNode } from 'react';
import TimelineItem from './TimelineItem';
import React from 'react';
import {v4 as uuidV4} from "uuid";

/**
 * The type of props this timeline takes
 */
export type TimelineProps = {
    timelineItems:ReactNode[]
}

/**
 * Timeline component for showing events
 */
export default function Timeline(props:TimelineProps){
    const {timelineItems} = props;
    
    /**
     * Get left or right timeline position 
     * based on the timeline item index
     * @param index 
     */
    const getLeftOrRightPos = (index:number) => {
        return index % 2 === 0? TimelinePosEnum.left : TimelinePosEnum.right;
    } 
    
    return (
        <div 
            className="relative max-w-[1200px] my-0 mx-auto 
            after:content-[' '] after:absolute after:w-[6px] after:bg-zinc-700 after:top-0 
            after:bottom-0 sm:after:left-1/2 after:left-[31px] after:ml-[-3px]"
        >
            {timelineItems.map((item, idx) => (
                <React.Fragment key={uuidV4()}>
                    <TimelineItem position={getLeftOrRightPos(idx)}>
                        {item}
                    </TimelineItem>        
                </React.Fragment>
            ))}
        </div>
    )
}
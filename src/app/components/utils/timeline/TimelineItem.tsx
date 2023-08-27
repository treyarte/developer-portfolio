import { ReactNode } from "react"
import styles from "./TimelineItem.module.css";
import { TimelinePosEnum } from "@/app/models/enums/TimelinePosEnum";

export default function TimelineItem (props:{children:ReactNode, position:TimelinePosEnum}) {
    const {children, position} = props;

    /**
     * Get the css class for position the timeline item
     */
    const getPosStyle = () => {
        return position === TimelinePosEnum.left ? styles.left : styles.right
    }

    return (
        <div 
            className={`relative py-[10px] sm:px-[40px] pl-[68px] bg-inherit sm:w-1/2  w-full
            after:content-[''] after:absolute after:w-[25px] after:h-[25px] after:z-[1] 
            after:right-[-12px] after:bg-white after:border-4 after:border-solid 
            after:border-portfolio-orange after:top-5 after:rounded-full after:z-10
            ${getPosStyle()}`}
        >
            {children}
        </div>
    )
}
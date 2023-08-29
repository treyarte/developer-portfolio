type SectionTitleProps = {
    backgroundText:string
    titleText:string
}

export default function SectionTitle(props:SectionTitleProps) {
    const {backgroundText, titleText} = props;
    return (
        <div className="relative">
            <h2 className="text-center text-3xl text-portfolio-orange">{titleText}</h2>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            sm:text-9xl text-[4rem] z-0 text-gray-300 opacity-10">
                {backgroundText}
            </span>
        </div>
    )
}
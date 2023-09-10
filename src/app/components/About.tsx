import FloatingIcon from "./utils/FloatingIcon";
import SectionTitle from "./utils/SectionTitle";

export default function About() {
    return (
        <section id="about" className="pt-28">
            <SectionTitle
                backgroundText="About"
                titleText="02. About"
            />
            <div className="flex justify-center lg:items-start items-center flex-col lg:flex-row  gap-20 text-lg ">                
                <div className="lg:w-1/3 w-auto">
                    <h4 className="text-3xl font-bold mb-4 text-center lg:text-start">A little bit about me</h4>
                    <p className="leading-loose px-8 lg:px-0">
                    Hi, my name is Treyvion Johnson. I am a Full-Stack developer in the Houston, TX area. I am currently employed at 
                    {" "}<a target="_blank" className="text-portfolio-orange underline hover:text-orange-300" href="https://www.bouncingpixel.com" aria-label="bouncing pixel link">Bouncing Pixel</a>, 
                    where I work closely with clients to develop user-friendly software solutions. I am also an avid gamer, 
                    to the extent that in 2023, I began developing my own games using C# Unity. Whether it's game development or web development, 
                    I take pleasure in exploring and refining my technical skills. Here are some technologies I enjoy working with:
                    </p>
                </div>                   
                <div className="lg:w-1/3 w-auto">
                    <h4 className="text-3xl font-bold mb-4 text-center lg:text-start hidden sm:block">Some of the tech I use</h4>
                    <h4 className="text-3xl font-bold mb-4 text-center sm:hidden">My Skills</h4>                    
                    <FloatingIcon/>                    
                </div>                                   
            </div>
        </section>
    )
}
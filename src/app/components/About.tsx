import FloatingIcon from "./utils/FloatingIcon";
import SectionTitle from "./utils/SectionTitle";

export default function About() {
    return (
        <section id="about" className="pt-28">
            <SectionTitle
                backgroundText="About"
                titleText="02. About"
            />
            <div className="flex justify-center lg:items-start items-center flex-col lg:flex-row  gap-20 mt-20 text-lg ">                
                <div className="lg:w-1/3 w-auto">
                    <h4 className="text-3xl font-bold mb-4 text-center lg:text-start">A little bit about me</h4>
                    <p className="leading-loose px-8 lg:px-0">
                        Hi, my name is Treyvion Johnson I am a Full-Stack developer in the Houston, TX area.
                        I am currently enrolled in Springboard’s Software Engineering career track to enhance my knowledge in newer web technologies such as React.js, Node.js, and Express.js. Also, I have professional experience working with web technologies such as JavaScript, Ruby on Rails, and PostgreSQL.
                        After graduating with a Bachelor of Science in Computer Information Systems, I gained professional experience working in a startup environment developing Full Stack applications.
                        Here are some technologies I enjoy working with:
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
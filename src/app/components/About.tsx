import FloatingIcon from "./utils/FloatingIcon";

export default function About() {
    return (
        <section id="about" className="h-[calc(100vh-var(--navbar-height))] pt-28">
            <div className="relative">
                <h2 className="text-center text-3xl text-portfolio-orange">02. About</h2>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-9xl z-0 text-gray-300 opacity-10">
                    About
                </span>
            </div>
            <div className="flex justify-center gap-20 mt-20 text-lg">                
                <div className="w-1/3">
                    <h4 className="text-3xl font-bold mb-4">A little bit about me</h4>
                    <p className="leading-loose">
                        Hi, my name is Treyvion Johnson I am a Full-Stack developer in the Houston, TX area.
                        I am currently enrolled in Springboard’s Software Engineering career track to enhance my knowledge in newer web technologies such as React.js, Node.js, and Express.js. Also, I have professional experience working with web technologies such as JavaScript, Ruby on Rails, and PostgreSQL.
                        After graduating with a Bachelor of Science in Computer Information Systems, I gained professional experience working in a startup environment developing Full Stack applications.
                        Here are some technologies I enjoy working with:
                    </p>
                </div>                   
                <div className="w-1/3">
                    <h4 className="text-3xl font-bold mb-4">Some of the tech I use</h4>
                    <ul className="flex">
                        <FloatingIcon/>
                    </ul>
                </div>                                   
            </div>
        </section>
    )
}
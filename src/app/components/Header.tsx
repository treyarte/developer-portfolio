import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="z-10 min-h-[var(--navbar-height)] bg-zinc-800 sticky top-0 flex justify-between backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="container mx-auto flex">
                <div className="text-3xl flex items-center text-portfolio-orange">
                    {"<Trey />"}
                </div>
                <nav className='flex flex-auto justify-end'>
                    <ol className="list-decimal list-inside flex flex-row items-center gap-x-10">
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>                        
                            <a href="#hero">Home</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#about">About</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='marker:text-portfolio-orange hover:text-portfolio-orange'>
                            <a href="#contact">Contact</a>
                        </li>
                        <li className='list-none'>
                            <a 
                                className='inline-block bg-portfolio-orange hover:bg-orange-600 font-semibold 
                                py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                                rounded-full'
                                target='blank' 
                                href="/static/files/treyvion_johnson_resume.pdf">Resume</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </header>
    )
}
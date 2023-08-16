import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className="profile-hero h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center items-center">
            <div className="h-40 w-40 relative">
                <span className="z-0 absolute left-0 top-0 h-full w-full 
                animate-spin-slow rounded-full bg-gradient-to-tr from-orange-400 to-orange-900"></span> 
                <div className='relative z-1 w-full h-full flex justify-center items-center'>
                    <img className='w-full' src="/static/images/profile.png" alt="Trey profile image" />
                </div>
            </div>
            <ul className={`m-7 flex gap-8 text-3xl ${styles["social-connect"]}`}>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="https://github.com/treyarte">
                    <span className="fab fa-github-square" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="https://www.linkedin.com/in/treyvionartejohnson/">
                      <span className="fab fa-linkedin" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="./files/treyvion_johnson_resume.pdf">
                    <span className="fas fa-file-pdf" aria-hidden="true"></span>
                  </a>
                  </li>
              </ul>            
            <h1 className={`${styles["greeting-text"]} text-4xl`}>Hello, I'm Trey, a <span className="text-portfolio-orange">Full-Stack</span> Engineer.</h1>
            <div className=" tracking-widest transition-all hover:text-portfolio-orange cursor-pointer absolute left-50 bottom-10 animate-bounce 
                            bg-white dark:bg-zinc-800 p-2 w-10 h-10 shadow-lg rounded-full 
                            flex items-center justify-center">
                    <svg className="w-6 h-6 text-white-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
  </div>
        </div>
    )
}
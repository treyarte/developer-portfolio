import styles from './Hero.module.css';
import Typewriter from './utils/typewriter/Typewriter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const titles = [
  "Software Engineer.",
  "Game Developer.",
  "Gamer."
]

export default function Hero() {    
  
    return (
        <div id={"hero"} className="profile-hero h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center items-center">
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
                    <GitHubIcon fontSize="large"/>
                  </a>
                </li>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="https://www.linkedin.com/in/treyvionartejohnson/">
                      <LinkedInIcon fontSize="large"/>
                    </a>
                </li>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="/static/files/treyvion_johnson_resume.pdf">
                    <PictureAsPdfIcon fontSize="large"/>
                  </a>
                  </li>
              </ul>            
            <h1 className={`text-center text-4xl`}>
              Hello, I'm Trey, a <Typewriter listOfText={titles} /> <span className='md:hidden text-portfolio-orange'>Full&#8209;Stack Engineer.</span>
            </h1>
            
            <div className="container flex justify-center mt-12">
              <a href='#about' className="border-solid border-2 border-portfolio-orange 
              rounded-md bg-inherit p-3 text-lg hover:bg-portfolio-orange transition duration-200 ease-out hover:ease-in">
                Check Me Out
              </a>
            </div>
        </div>
    )
}

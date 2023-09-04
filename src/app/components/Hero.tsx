"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const titles = [
  " Full-Stack Engineer.",
  "Game Developer.",
  "Gamer."
]



export default function Hero() {
    const [title, setTitle] = useState("");
    const [typewriterComplete, setTypeWriterComplete] = useState(false)    
    const indexRef = useRef(0);
    const titlesIndex = useRef(0);
    const greetingHeaderRef = useRef<HTMLHeadingElement>(null);
    
    //TODO refactor into component
    useEffect(() => {    
      if(typewriterComplete) {
        return;
      }     
      setTimeout(async () => {
            if(titles[titlesIndex.current] === title) {
              greetingHeaderRef.current?.classList.add(styles.cursor);
              var r = new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve("")
                }, 2000);
              });

              await r;
              setTypeWriterComplete(true);
            } else {              
              setTitle(title + titles[titlesIndex.current].charAt(indexRef.current));
              indexRef.current+= 1;
              
            }
          
        }, 100)      
    }, [typewriterComplete, title]);

    useEffect(() => {
      if(!typewriterComplete) {
        if(titlesIndex.current >= titles.length) {
          titlesIndex.current = 0;
        }
        return;
      }
      greetingHeaderRef.current?.classList.remove(styles.cursor);
      setTimeout(async () => {
        if(indexRef.current <= 0) {
          indexRef.current = 0;
          setTypeWriterComplete(false);
          if(titlesIndex.current > titles.length - 1) {
            titlesIndex.current = 0
          } else {
            titlesIndex.current+=1
          }

          return;
        }
        setTitle(title.replace(titles[titlesIndex.current].charAt(indexRef.current - 1), ""));
        indexRef.current-= 1;
      }, 50);
    }, [typewriterComplete, title])

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
                    <span className="fab fa-github-square" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="https://www.linkedin.com/in/treyvionartejohnson/">
                      <span className="fab fa-linkedin" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                  <a className='hover:text-zinc-300' target="_blank" href="/static/files/treyvion_johnson_resume.pdf">
                    <span className="fas fa-file-pdf" aria-hidden="true"></span>
                  </a>
                  </li>
              </ul>            
            <h1 ref={greetingHeaderRef} className={`${styles["greeting-text"]} text-center text-4xl`}>Hello, I'm Trey, a <span className="text-portfolio-orange">{title}</span></h1>
            
            <div className="container flex justify-center mt-12">
              <a href='#about' className="border-solid border-2 border-portfolio-orange 
              rounded-md bg-inherit p-3 text-lg hover:bg-portfolio-orange transition duration-200 ease-out hover:ease-in">
                Check Me Out
              </a>
            </div>
        </div>
    )
}
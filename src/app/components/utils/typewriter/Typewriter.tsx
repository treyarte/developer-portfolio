"use client"
import { useState, useRef, useEffect } from "react";
import styles from "./Typewriter.module.css";

type TypeWriterProps = {
    listOfText:string[]
}

/**
 * Component for rendering a typewriter like effect
 * @param props 
 * @returns 
 */
export default function Typewriter(props:TypeWriterProps) {
    const {
        listOfText
    } = props;

    const [title, setTitle] = useState("");
    const [typewriterComplete, setTypeWriterComplete] = useState(false)    
    const indexRef = useRef(0);
    const titlesIndex = useRef(0);
    const typewriterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {    
        if(typewriterComplete) {
          return;
        }     
        setTimeout(async () => {
              if(listOfText[titlesIndex.current] === title) {
                typewriterRef.current?.classList.add(styles.cursor);
                var r = new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    resolve("")
                  }, 2000);
                });
  
                await r;
                setTypeWriterComplete(true);
              } else {              
                setTitle(title + listOfText[titlesIndex.current].charAt(indexRef.current));
                indexRef.current+= 1;
                
              }
            
          }, 100)      
      }, [typewriterComplete, title]);
  
      useEffect(() => {
        if(!typewriterComplete) {
          if(titlesIndex.current >= listOfText.length) {
            titlesIndex.current = 0;
          }
          return;
        }
        typewriterRef.current?.classList.remove(styles.cursor);
        setTimeout(async () => {
          if(indexRef.current <= 0) {
            indexRef.current = 0;
            setTypeWriterComplete(false);
            if(titlesIndex.current > listOfText.length - 1) {
              titlesIndex.current = 0
            } else {
              titlesIndex.current+=1
            }
  
            return;
          }
          setTitle(title.replace(listOfText[titlesIndex.current].charAt(indexRef.current - 1), ""));
          indexRef.current-= 1;
        }, 50);
      }, [typewriterComplete, title])

    return (
        <span ref={typewriterRef} className={`hidden md:inline ${styles["typewriter-text"]} text-portfolio-orange`} suppressHydrationWarning>{title}</span>
    )
}
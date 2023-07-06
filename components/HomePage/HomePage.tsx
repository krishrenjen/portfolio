"use client"
import React, {useState, useEffect} from 'react'
import GradientButton from '../Buttons/GradientButton';
import HomePageCSS from "./HomePage.module.css";
import { motion } from 'framer-motion';


export default function NameHeader() {
    const headers = [
        {
            content: "High", 
            gradient: "bg-gradient-to-r from-pink-400 to-purple-600",
        },
        {
            content: "School", 
            gradient: "bg-gradient-to-r from-pink-500 to-yellow-500",
        },
        {
            content: "Developer", 
            gradient: "bg-gradient-to-r from-blue-400 to-green-600",
        }
    ];


    const buttons = [
        {
            content: "Projects",
            href: "/projects",
            gOverride: ""
        },
        {
            content: "Skills",
            href: "/skills",
            gOverride: ""
        },
        {
            content: "Blog",
            href: "/blog/list",
            gOverride: ""
        },
        {
            content: "Resume",
            href: "/resume",
            gOverride: ""
        },
        {
            content: "Contact Me",
            href: "/contact",
            gOverride: ""
        },

    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const headersCSS = "text-5xl flex font-title font-normal justify-center text-transparent bg-clip-text "

    
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % headers.length);
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

    return (
        <div className="flex flex-col">
            
            <div className={HomePageCSS.floatheader}>
                <h1 className="text-6xl flex font-title font-medium justify-center mb-5">Krish Renjen</h1>
                <div className="flex gap-3 justify-center flex-wrap">
                    {headers.map((item, index) => (
                        <span className={"py-1 " + ((index == currentIndex) ? (headersCSS + item.gradient) : headersCSS + "bg-white")}>{item.content}</span>
                    ))}
                </div>
            </div>
            
            
            
            
            <div className="flex flex-row flex-wrap relative w-full gap-10 justify-center mt-20">

                {buttons.map((item, index) => (
                    <GradientButton gradient={(item.gOverride == "" || item.gOverride == null) ? (headers.at(index % headers.length)?.gradient || "") : item.gOverride} content={item.content} href={item.href}></GradientButton>
                ))}
                
            </div>
                     
        </div>
    )
}


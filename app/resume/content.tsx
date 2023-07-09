"use client"
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import {BiDownload, BiLinkExternal} from 'react-icons/bi'
import { IconContext } from "react-icons";


export default function Content() {
    const gradient = "bg-gradient-to-r from-pink-500 to-yellow-500"


    return (
        <>
            <div className=" w-full min-h-screen">
                <Navbar></Navbar>
                <AnimatePresence mode="wait">
                    <motion.div
                        key="page"
                        initial="initialState"
                        animate="animateState"
                        transition={{
                            duration: 1,
                        }}
                        variants={{
                            initialState: {
                                opacity: 0,
                            },
                            animateState: {
                                opacity:1,
                            }
                        }}
                    >
                        <motion.div
                                key="page"
                                initial="initialState"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                }}
                                variants={{
                                    initialState:{
                                        y: 30
                                    },
                                    visible:{
                                        y: 0
                                    }
                                }}
                            >
                                <h1 className="flex w-full justify-center items-center"><span className={"font-title font-semibold text-8xl text-center mb-10 py-3 text-transparent bg-clip-text " + gradient}>Resume</span></h1>
                            </motion.div>
                            <div className="flex flex-col w-full items-center min-h-fit flex-grow gap-10 mb-12 justify-center">
                                <div className="flex justify-center gap-6 items-center">
                                    {/* Download Resume button */} 
                                    <div title={"Download"} className="h-14 w-14 bg-dark-gray rounded-md flex justify-center items-center hover:bg-slate-600">
                                        <a href="/resume/Resume.pdf" download>
                                            <div className="relative h-10 w-10">
                                                <IconContext.Provider value={{ color: "white", className: "w-full h-full" }}>
                                                    <div>
                                                        <BiDownload />
                                                    </div>
                                                </IconContext.Provider>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    {/* Open Resume Button */} 
                                    <div title={"Open"} className="h-14 w-14 bg-dark-gray rounded-md flex justify-center items-center hover:bg-slate-600">
                                        
                                        <a href="/resume/Resume.pdf" target='_blank'>
                                            <div className="relative h-10 w-10">
                                                <IconContext.Provider value={{ color: "white", className: "w-full h-full" }}>
                                                    <div>
                                                        <BiLinkExternal />
                                                    </div>
                                                </IconContext.Provider>
                                            </div>
                                        </a>
                                        
                                    </div>

                                </div>
                                <div className="relative w-full h-[60rem]">
                                    <Image priority={true} alt="" fill={true} style={{objectFit:"contain"}} src={"/resume/Resume1.png"}/>
                                </div>    
                            
                            </div>
                        </motion.div>
                    </AnimatePresence >
                
                    <div className="relative bottom-0">
                        <Footer/>
                    </div>
    
            </div>
        </>
        
      )
}

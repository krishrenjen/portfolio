"use client"
import React from 'react'
import SkillSection from "@/components/SkillSection/SkillSection";
import { SkillTypes } from "@/common/enums/skilltypes";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from '@/components/Navbar/Navbar';
import SkillLevelBar from '@/components/SkillLevelBar/SkillLevelBar';
import Footer from '@/components/Footer/Footer';

export default function Content() {
    const gradient = "bg-gradient-to-r from-pink-400 to-purple-600"
  return (
    <>
        <div className="flex flex-col w-screen min-h-screen">
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
                            <h1 className={"font-title font-semibold text-8xl text-center mb-10 text-transparent bg-clip-text " + gradient}>Skills</h1>
                        </motion.div>
                        <div className="flex flex-col w-screen items-center min-h-fit flex-grow gap-16">    
                            <SkillSection title="Programming & Markup Languages" type={SkillTypes.LANGUAGE} gradient={gradient}/> 
                            <SkillSection title="Tools & Frameworks" type={SkillTypes.FRAMEWORK} gradient={gradient}/> 
                            
                            <div id="skilllevels">
                                <SkillLevelBar/>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence >
            
            <Footer/>
                
        </div>
    </>
    
  )
}

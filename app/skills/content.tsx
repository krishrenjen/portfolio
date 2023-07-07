"use client"
import React from 'react'
import SkillSection from "@/components/SkillSection/SkillSection";
import { SkillTypes } from "@/common/enums/skilltypes";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from '@/components/Navbar/Navbar';

export default function Content() {
  return (
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
            <div className="flex flex-col w-screen min-h-screen">
                    <Navbar></Navbar>
                    <div className="flex w-screen  justify-center min-h-fit flex-grow">    
                        <SkillSection title="Programming Languages" type={SkillTypes.LANGUAGE}/> 
                    </div>
                    <Navbar></Navbar>
                </div>
            <div>
                
            </div>
        </motion.div>
    </AnimatePresence >
  )
}
"use client"
import React from 'react'
import SkillSection from "@/components/SkillSection/SkillSection";
import { SkillTypes } from "@/common/enums/skilltypes";
import { AnimatePresence, motion } from "framer-motion";

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
            <div>
                <SkillSection title="Programming Languages" type={SkillTypes.LANGUAGE}/>
            </div>
        </motion.div>
    </AnimatePresence >
  )
}

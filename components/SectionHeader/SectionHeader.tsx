import { motion } from 'framer-motion';
import React from 'react'

interface SectionHeaderProps{
    text: string,
    gradient: string
}

// key="page"
//                     initial="initialState"
//                     animate="animateState"
//                     transition={{
//                         duration: 1,
//                     }}
//                     variants={{
//                         initialState: {
//                             opacity: 0,
//                         },
//                         animateState: {
//                             opacity:1,
//                         }
//                     }}

export default function SectionHeader({text, gradient} : SectionHeaderProps) {
    const wordArray = text.split("&")
    const wordArray2 = wordArray.flatMap((element, index) => (index !== wordArray.length - 1) ? [element, "&"] : [element]);
   

    return (
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
        <div>
            <h1 className="text-5xl flex font-title font-medium justify-center items-center mb-5 gap-3">
                {wordArray2.map((item, index) => (
                    (item == "&") ? <span key={index} className={"text-7xl text-transparent bg-clip-text " + gradient}>{item}</span> : <span key={index}>{item}</span>
                ))}
            </h1>
        </div>
    </motion.div>
    
    )
}

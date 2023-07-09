import { motion } from 'framer-motion';
import React from 'react'

interface SectionHeaderProps{
    text: string,
    gradient: string
    delimiter?: string
}


export default function SectionHeader({text, gradient, delimiter} : SectionHeaderProps) {
    if(delimiter == null){
        delimiter = "&";
    }
    const wordArray = text.split(delimiter)
    const wordArray2 = wordArray.flatMap((element, index) => (index !== wordArray.length - 1) ? [element, delimiter] : [element]);
   

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
            <h1 className="text-5xl flex flex-wrap font-title font-medium justify-center items-center mb-5 gap-3">
                {wordArray2.map((item, index) => (
                    (item === delimiter) ? <span key={index} className={"text-7xl text-transparent bg-clip-text " + gradient}>{item}</span> : <span key={index}>{item}</span>
                ))}
            </h1>
        </div>
    </motion.div>
    
    )
}

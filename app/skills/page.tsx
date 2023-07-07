"use client"
import SkillSection from "@/components/SkillSection/SkillSection";
import { SkillTypes } from "@/common/enums/skilltypes";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
    title: 'Krish Renjen | Skills',
    description: 'Krish Renjen - Skills',
  }

function Home() {

    return ( 
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key="page"
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 1,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0,
                        },
                        animateState: {
                            opacity:1,
                        },
                        exitState:{
                            opacity:0,
                        }
                    }}
                >
                    <div>
                        <SkillSection title="Programming Languages" type={SkillTypes.LANGUAGE}/>
                    </div>
                </motion.div>
            </AnimatePresence >
        </>
        
    );
}

export default Home;
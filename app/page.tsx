"use client"
import HomePage from "@/components/HomePage/HomePage";
import Navbar from "@/components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
    return (
        <>
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
                    <div className="flex flex-col w-screen h-screen min-h-fit">
                        <Navbar></Navbar>
                        <div className="flex w-screen items-center justify-center min-h-fit flex-grow">    
                            <HomePage/> 
                        </div>
                        <Navbar></Navbar>
                    </div>

                </motion.div>
            </AnimatePresence >
                
        </> 
        
        
    );
}

export default Home;
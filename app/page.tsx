"use client"
import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/HomePage/HomePage";
import Navbar from "@/components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
    return (
        <>
         <div className="flex flex-col w-screen h-screen min-h-fit">
            <Navbar></Navbar>       
            <div className="flex w-screen items-center justify-center min-h-fit flex-grow">
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
                        <HomePage/> 
                    </motion.div>
                </AnimatePresence >
            </div>
            <Footer/>
        </div>
                
        </> 
        
        
    );
}

export default Home;
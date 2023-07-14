"use client"
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function Content() {
    const gradient = "bg-gradient-to-r from-blue-400 to-green-600"
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
                                <h1 className="flex w-full justify-center items-center"><span className={"font-title font-semibold text-8xl text-center mb-10 py-3 text-transparent bg-clip-text " + gradient}>Blog</span></h1>
                            </motion.div>
                            <div className="flex flex-col w-full items-center min-h-fit flex-grow gap-16 mb-12 justify-center">    
                                <h1 className="flex h-screen">Coming Soon</h1>
                            </div>
                        </motion.div>
                    </AnimatePresence >
                
                    <div className="bottom-0">
                        <Footer/>
                    </div>
    
            </div>
        </>
        
      )
}

"use client"
import { Hyperlink } from '@/common/interfaces/Hyperlink'
import React from 'react'
import Image from 'next/image'


interface SkillCardProps {
    info: {
        title: string;
        description: string;
        image: string;
    };
    grayedOut:boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}


export default function SkillCard({info, grayedOut, onMouseEnter, onMouseLeave} : SkillCardProps) {
  const textColor:string = ((grayedOut) ? "text-gray-400" : "text-white")
  

  return (
    <div 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}  
      className={"group relative w-80 h-32 drop-shadow-md transition-all duration-200 hover:scale-125 hover:-rotate-6 " + (grayedOut ? "z-0":"z-10")}
    >
        <div className={"relative rounded-lg w-80 h-32 bg-dark-gray flex items-center" }>
          <div className="bg-light-dark-gray rounded-l-lg rounded-r-sm h-full w-32 flex items-center justify-center">
            <div className="relative w-80 h-32 mx-3 my-3">
            <Image alt="" fill={true} style={{objectFit:"contain"}} src={info.image}/>
            </div>
          </div>

          <div className="flex flex-col flex-grow">
            <h2 className={"text-2xl text-center font-medium font-title " + textColor}>{info.title}</h2> 
            <p className={" text-center font-light"}>{info.description}</p>
          </div>
        </div>
    </div>
  )
}

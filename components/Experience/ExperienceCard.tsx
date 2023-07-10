import { Hyperlink } from '@/common/interfaces/Hyperlink';
import React from 'react'
import Image from 'next/image'
import {AiOutlineLink} from 'react-icons/ai'
import {FiArrowUpRight} from 'react-icons/fi'
import { IconContext } from 'react-icons';
import { Tag } from '@/common/interfaces/Tag';


interface SkillCardProps {
    info: {
        title: string;
        description: string;
        primaryHref: string;
        date?:string;
        links: Hyperlink[];
        tags?: Tag[];
    };
    grayedOut:boolean;
    somethingSelected:boolean,
    onMouseEnter: () => void;
    onMouseLeave: () => void;

}

function getColor(type:string|undefined){
    const tool_color = "bg-red-600"
    const lang_color = "bg-blue-600"
    const misc_color = "bg-green-600"

    if(type === undefined || type === null){
        return misc_color;
    }
    if(type === "Language"){
        return lang_color;
    }
    if(type === "Tool"){
        return tool_color;
    }
    return misc_color;
}


export default function SkillCard({info, grayedOut, somethingSelected, onMouseEnter, onMouseLeave} : SkillCardProps) {
    const delimiter = "\n"
    var wordArray = info.description.split(delimiter)
    wordArray = wordArray.map(item => item === " " ? "‎" : item)

    return (
        <div 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
        className={"group w-full min-h-[128px] h-fit drop-shadow-md transition-all duration-200 hover:translate-x-5 " + (grayedOut ? " opacity-50" : "")}
        >
            <div className={"rounded-lg w-full min-h-[128px] bg-dark-gray flex justify-center items-center " + ((!grayedOut && somethingSelected) ? " outline-1 outline-white outline" : " ") }>

            <div className="flex flex-col flex-grow gap-3 flex-wrap justify-center items-center px-12 py-6 w-fit">
                
                <a href={info.primaryHref} target="_blank" className={"flex gap-1 w-fit justify-center  items-center text-2xl text-center font-medium font-title text-white hover:text-slate-300 "}>
                    {info.title}
                    <IconContext.Provider value={{className: "relative transition-transform duration-200 w-5 h-5 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0  hidden md:block" }}>
                        <div>
                            <FiArrowUpRight />
                            
                        </div>
                    </IconContext.Provider>
                </a> 
                {(info.date != null) && <p className="font-title font-medium text-lg">{info.date}</p>}
                <hr className={"opacity-20 bg-white w-48"}></hr>
                <span className={"flex flex-col text-center font-title font-normal text-white mx-[10%]"}>
                    {wordArray.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </span>
                <h1 className="flex gap-4 text-white items-center justify-center ">
                    {info.links.map((item, index) => (
                        <a key={index} className=" hover:text-slate-300 flex items-center font-title font-light justify-center gap-1" target="_blank" href={item.href}>
                            <IconContext.Provider value={{className: "w-5 h-5" }}>
                                <div>
                                    <AiOutlineLink />
                                    
                                </div>
                            </IconContext.Provider>
                            {item.text}
                        </a>
                    ))}
                </h1>
                <span className="flex flex-wrap gap-2 justify-center items-center">
                    {info.tags?.map((item, index) => (
                        <div key={index} className={"rounded-lg px-2 py-[2px] text-white " + getColor(item.type)}>{item.title}</div>
                    ))}
                </span>
            </div>
                
            
            </div>
        </div>
    )
}

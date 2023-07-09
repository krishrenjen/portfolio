import React, { useState } from 'react'
import skills from "@/common/json/skills.json"
import SkillCard from '../SkillCard/SkillCard';
import SectionHeader from '../SectionHeader/SectionHeader';


interface SkillSectionProps{
    title:string,
    type: string,
    gradient: string,
    delimiter?: string,
}

export default function SkillSection({title, type, gradient, delimiter}: SkillSectionProps) {

    const data = skills[type as keyof typeof skills];
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);


    const handleCardHover = (index: number) => {
        setHoveredCard(index);
    };
    
    const handleCardLeave = () => {
        setHoveredCard(null);
    };
    
    return (
        <div className='w-full'>
            <SectionHeader text={title} gradient={gradient} delimiter={delimiter}/>
            <hr className="opacity-20 mb-12 mx-[20%]"></hr>
            <div className="flex flex-row flex-wrap gap-3 items-center justify-center mx-[15%] h-fit">
                {data.map((item, index) => (
                    <SkillCard
                    key={index} 
                    info={item} 
                    grayedOut={hoveredCard !== null && hoveredCard != index}
                    somethingSelected={hoveredCard != null}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={() => handleCardLeave()}
                />
                ))}
            </div>
            <hr className="opacity-20 mt-12 mx-[20%]"></hr>
        </div>
    )
}

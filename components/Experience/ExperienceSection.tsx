import React, { useState } from 'react'
import experiences from "@/common/json/experience.json"
import SectionHeader from '../SectionHeader/SectionHeader';
import ExperienceCard from './ExperienceCard';


interface ExperienceSectionProps{
    title:string,
    type: string,
    gradient: string,
    delimiter?: string,
}

export default function ExperienceSection({title, type, gradient, delimiter}: ExperienceSectionProps) {

    const data = experiences[type as keyof typeof experiences];
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
            <div className="flex flex-col gap-4 items-center justify-center mx-[15%]">
                {data.map((item, index) => (
                    <ExperienceCard
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

import React, { useState } from 'react'
import skills from "@/common/json/skills.json"
import SkillCard from '../SkillCard/SkillCard';


interface SkillSectionProps{
    title:string,
    type: string,
}

export default function SkillSection({title, type}: SkillSectionProps) {

    const data = skills[type as keyof typeof skills];
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);


    const handleCardHover = (index: number) => {
        setHoveredCard(index);
    };
    
    const handleCardLeave = () => {
        setHoveredCard(null);
    };
    
    return (
        <div>
            <h1>{title}</h1>
            <div className="flex flex-row flex-wrap gap-3 items-center justify-center mx-auto px-40 h-fit">
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
        </div>
    )
}

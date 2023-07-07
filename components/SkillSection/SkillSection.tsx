import React from 'react'
import skills from "@/common/json/skills.json"
import SkillCard from '../SkillCard/SkillCard';


interface SkillSectionProps{
    title:string,
    type: string,
}

export default function SkillSection({title, type}: SkillSectionProps) {

    const data = skills[type as keyof typeof skills];

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {data.map((item) => (
                    <SkillCard info={item}/>
                ))}
            </div>
        </div>
    )
}
